import React from 'react';
import './CommentSection.css';

 const CommentSection = ({ props }) => {
    return (
        <div className="commentContainer">
        <p><span>{props.username} </span>{props.text}</p>
        </div>
    )
}

 export default CommentSection;