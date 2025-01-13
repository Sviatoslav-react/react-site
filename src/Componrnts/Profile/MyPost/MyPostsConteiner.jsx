import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsConteiner = (props) => {

//   let addPost = () => {
//     let action = addPostActionCreator();
//     props.dispatch(action);
//   }

//   let onPostChange = (text) => {
//     let action = updateNewPostTextActionCreator(text);
//     props.dispatch(action)
//   }

//     return (<MyPosts
//       updateNewPostText={onPostChange}
//       addPost={addPost}
//       posts={props}
//       newPostText={props.newPostText}

//     />)
// }

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      let action = addPostActionCreator();
      dispatch(action);
    },
  };
};

const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsConteiner;
