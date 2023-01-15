import Comment from "./Comment/Comment";
import React from "react";
import {CommentsListProps} from "./CommentsList.types";


const CommentsList:React.FC<CommentsListProps> = ({comments}) => {
    return (
        <div>
            {comments.map(item => <Comment key={item.id} item={item} />
            )}
        </div>
    )
}

export default CommentsList;