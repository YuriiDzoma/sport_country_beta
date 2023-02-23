import styles from "./ProgramRemove.module.scss";
import {IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {deleteProgram} from "store/actions";
import {currentUser} from "store/selectors";

const ProgramRemove = () => {
    const user = useAppSelector(currentUser);
    const { id } = useParams<string>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const onSubmit = (id: string) => {
        if (id && user) {
            dispatch(deleteProgram(user, id)).then();
            navigate('/training/training_programs/');
        }
    }
    return (
        <div className={styles.deleteProgram}>
            {id && (
                <IconButton aria-label="delete" size="large" color="warning" onClick={() => onSubmit(id) }>
                    <DeleteIcon />
                </IconButton>
            )}
        </div>
    )
}

export default ProgramRemove;