import React from 'react';
import { IoIosHeartEmpty} from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

 const PostContainer = (props) => {
    return (
        <div className="postContainer">
            <div className="userDetails">
                <img className="profilePicture" src={props.post.thumbnailUrl} alt="user-profile" />
                <p>{props.post.username}</p>
            </div>
            <div className="userPost">
                <img className="postImage" src={props.post.imageUrl} alt="user-post"/>
            </div>
            <div className="reaction">
            <div className="postIcons">
            <IoIosHeartEmpty /> <FaRegComment/>
            </div>
            {props.post.likes} likes</div>
            {props.post.comments.map((comment, index) =>{
                console.log("===",comment);
                return <CommentSection key={index} props={comment}/>
            })
            }
            <div className="timestamp">
            {props.post.timestamp}</div>
        </div>
    )
}

 export default PostContainer;