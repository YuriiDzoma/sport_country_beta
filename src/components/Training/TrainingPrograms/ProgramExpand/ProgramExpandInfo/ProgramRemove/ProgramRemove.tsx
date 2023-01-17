import styles from "components/Training/TrainingPrograms/ProgramExpand/ProgramExpandInfo/ProgramExpandInfo.module.scss";
import {IconButton} from "@mui/material";
import {deleteProgram, fetchPrograms} from "store/ActionCreators";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router";
import {useAppDispatch} from "hooks/redux";

const ProgramRemove = () => {
    const { id } = useParams<string>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const onSubmit = (id: string) => {
        if (id) {
            deleteProgram(id);
            dispatch(fetchPrograms());
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