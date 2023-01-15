import styles from "./Comment.module.scss";
import React from "react";
import {CommentProps} from "./Comment.types";


const Comment:React.FC<CommentProps> = ({item}) => {
    return (
        <div key={item.id} className={styles.comments}>
            <div className={styles.comments_text}><span>{item.comment}</span></div>
            <div className={styles.comments_date}><span>{item.date}</span></div>
        </div>
)
}

export default Comment