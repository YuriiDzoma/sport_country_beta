import styles from './ProgramExpandComments.module.scss'
import CommentsForm from "./CommentsForm/CommentsForm";
import CommentsSubtitle from "./CommentsSubtitle/CommentsSubtitle";
import CommentsList from "./CommentsList/CommentsList";
import {ProgramExpandCommentsProps} from "./ProgramExpandComments.types";
import React from "react";


const ProgramExpandComments:React.FC<ProgramExpandCommentsProps> = ({program, addComment}) => {

    return (
        <div className={styles.commentsContainer}>

            <CommentsForm programId={program.id} addComment={addComment}/>

            {program.comments.length > 0 ? <CommentsSubtitle /> : null}

            <CommentsList comments={program.comments} />
        </div>
    )
}

export default ProgramExpandComments;