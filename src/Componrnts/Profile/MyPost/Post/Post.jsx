import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  console.log("fdsfds", props.message);

  return (
    <div className={s.Post}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE15fnK22dLrRVA8ZGgr_Gveo0bh_tT7TnQh1aLa9Yu-dyj6rWpAHKf_uLR7U6LOveDhE&usqp=CAU" />
      {props.message}
      <br /> like - {props.like}
    </div>
  );
};
export default Post;
