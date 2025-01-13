import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      {/* <div className={s.PictureOnProdile}>
        <img src="https://wcscanada.org/site/assets/files/1146/liardriverfloodplain_seyt_june2016_credithilarycooke.1400x500.jpg" />
      </div> */}
      <div className={s.PictureMyProfile}>
        <img src={props.profile.photos.large} />
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
