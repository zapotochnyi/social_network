import React from "react";
import c from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={c.publications}>
      <div className={c.post_item}>
        <img className={c.avatar_mini} src={props.avatar} alt="avatar" />
        <div className={c.post_body}>
          <h4>{props.name}</h4>
          <div className={c.text}>{props.text}</div>
          <div className={c.buttons}>
            <div className={c.btn_wrap}>
              <img
                className={c.btn_item}
                src="https://cdn0.iconfinder.com/data/icons/instagram-ui-1/24/Instagram-UI_like-512.png"
                alt="like"
              />
              <span className={c.quantity}>{props.quantity_likes}</span>
            </div>
            <div className={c.btn_wrap}>
              <img
                className={c.btn_item}
                src="https://cdn1.iconfinder.com/data/icons/social-rating/24/repost-re-post-retweet-512.png"
                alt="repost"
              />
              <span className={c.quantity}>{props.quantity_reposts}</span>
            </div>
            <img
              className={c.btn_item}
              src="https://e7.pngegg.com/pngimages/32/955/png-clipart-computer-icons-share-icon-icon-design-shares-angle-triangle.png"
              alt="share"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
