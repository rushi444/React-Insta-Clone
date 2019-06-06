import React, { useState, useEffect } from "react";
import pt from "prop-types";
import uuidv4 from "uuid/v4";
import moment from "moment";
import faker from "faker";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import CommentSection from "../CommentSection/CommentSection";
import Form from "../Form/form";
import "./PostContainer.css";

const PostContainer = ({ props }) => {
  const {
    postId,
    comments,
    thumbnailUrl,
    imageUrl,
    timestamp,
    likes,
    username
  } = props;
  const commentDate = timestamp.replace(/th/, "");
  const [inputValue, setInputValue] = useState("");
  const [inputComment, setInputComment] = useState(comments);
  const [createdAt, setCreatedAt] = useState(
    moment(new Date(commentDate), "MMM D LTS").fromNow()
  );

  const [addLikes, updateLikes] = useState(likes);
console.log(createdAt);
  useEffect(()=>{
    const post = JSON.parse(localStorage.getItem("posts"));
    const postUpdate = post.map((userPost) => {
      if(postId === userPost.postId) {
        return {
          ...userPost, comments: inputComment, timestamp: `${moment(new Date(), "MMM D LTS")}`, likes: addLikes
        }
      }
      return userPost;
    });
    localStorage.setItem("posts", JSON.stringify(postUpdate));
  },[inputComment, postId, createdAt, addLikes])

  const handleChange = e => {
    setInputValue(e.target.value);
  };
  const postComment = e => {
    e.preventDefault();
    const newComment = {
      postId: postId,
      id: uuidv4(),
      username: faker.name.findName(),
      text: inputValue
    };
    setInputComment([...inputComment, newComment]);
    setInputValue("");
    setCreatedAt(moment(new Date(), "MMM D LTS").fromNow());
  };
  const handleLikes = () => {
    let newLike = likes;
    updateLikes(newLike + 1);
  };

  return (
    <div className="postContainer">
      <div className="userDetails">
        <img className="profilePicture" src={thumbnailUrl} alt="user-profile" />
        <p>{username}</p>
      </div>
      <div className="userPost">
        <img className="postImage" src={imageUrl} alt="user-post" />
      </div>
      <div className="reaction">
        <div className="postIcons">
          <span onClick={handleLikes}>
            <IoIosHeartEmpty />
          </span>

          <span>
            <FaRegComment />
          </span>
        </div>
        {addLikes} likes
      </div>
      {inputComment.map(comment => {
        return <CommentSection key={comment.id} props={comment} />;
      })}
      <div className="timestamp">{createdAt}</div>
      <Form
        inputValue={inputValue}
        changeHandler={handleChange}
        addComment={postComment}
      />
    </div>
  );
};

export default PostContainer;

PostContainer.propTypes = {
  props: pt.shape({
    comments: pt.arrayOf(
      pt.shape({
        id: pt.string.isRequired,
        username: pt.string.isRequired,
        text: pt.string.isRequired
      })
    ),
    thumbnailUrl: pt.string.isRequired,
    imageUrl: pt.string.isRequired,
    timestamp: pt.string.isRequired,
    likes: pt.number.isRequired,
    username: pt.string.isRequired
  }).isRequired
};