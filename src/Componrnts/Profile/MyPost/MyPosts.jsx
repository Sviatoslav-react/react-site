import React from "react";
import Post from "./Post/Post";
const MyPosts = (props) => {
  let NewPostElement = React.createRef();

  let postsElement = props.posts.map((p) => (
    <Post key={p.id} message={p.message} like={p.like} />
  ));

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = NewPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      My post
      <div>
        <textarea
          onChange={onPostChange}
          ref={NewPostElement}
          value={props.newPostText}
        />
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div>{postsElement}</div>
    </div>
  );
};
export default MyPosts;
