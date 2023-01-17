import Comment from "./Comment/Comment";
import React from "react";
import {CommentsListProps} from "./CommentsList.types";
import CommentsSubtitle from './CommentsSubtitle/CommentsSubtitle';


const CommentsList:React.FC<CommentsListProps> = ({comments}) => {

    return (
        <div>
            { comments.length > 0 && (
                <>
                    <CommentsSubtitle/>
                    {comments.map(item => <Comment key={item.id} item={item}/>)}
                </>
            )}
        </div>
    )
}

export default CommentsList;