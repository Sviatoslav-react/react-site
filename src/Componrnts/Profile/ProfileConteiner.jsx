import { connect } from "react-redux";
import {
  getStatus,
  getUserProfile,
  updateStatus,
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../Hoc/AuthRedirect";
import { compose } from "redux";

const ProfileContainer = (props) => {
  const { userId } = useParams();
  useEffect(() => {
    console.log(props);
    props.getUserProfile(userId);
    setTimeout(() => {
      props.getStatus(userId);
    }, 1000);
  }, []);

  return (
    <Profile
      {...props}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
    />
  );
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withAuthRedirect,
)(ProfileContainer);
