import styles from './ProgramExpandComments.module.scss'
import CommentsForm from "./CommentsForm/CommentsForm";
import CommentsList from "./CommentsList/CommentsList";
import React from "react";
import {useParams} from "react-router-dom";
import {useAppSelector} from "hooks/redux";
import {selectProgramById} from "store/selectors";

const ProgramExpandComments = () => {
    const { id } = useParams()
    const program = useAppSelector((state) => selectProgramById(state, id));
    const comments = program && id ? program.comments : undefined;
    return (
        <div className={styles.commentsContainer}>
            <CommentsForm />
            { id && program && comments && (
                <>
                    <CommentsList comments={comments} />
                </>
            )}
        </div>
    )
}

export default ProgramExpandComments;