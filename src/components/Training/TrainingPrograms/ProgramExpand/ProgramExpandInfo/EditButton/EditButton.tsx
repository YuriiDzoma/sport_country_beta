import styles from './EditButton.module.scss'
import {Link} from "react-router-dom";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import React from "react";

type EditButtonProps = {
    userId: string;
    programId: string
}

const EditButton: React.FC<EditButtonProps> = ({userId, programId}) => {
    return (
        <div className={styles.redactor}>
            <Link to={`/training/training_programs/${userId}/${programId}/redactor/`}>
                <BorderColorIcon fontSize={'small'} />
            </Link>
        </div>
    )
}

export default EditButton;