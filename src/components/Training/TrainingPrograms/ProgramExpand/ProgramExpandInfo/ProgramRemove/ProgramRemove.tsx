import styles from "./ProgramRemove.module.scss";
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {deleteProgram} from "store/actions";
import {currentUser} from "store/selectors";

const ProgramRemove = () => {
    const user = useAppSelector(currentUser);
    const { id } = useParams<string>();
    const dispatch = useAppDispatch()
    const onSubmit = (id: string) => {
        if (id && user) {
            dispatch(deleteProgram(user.id, id)).then();
        }
    }
    return (
        <div className={styles.deleteProgram}>
            {id && (
                <DeleteIcon color="warning" onClick={() => onSubmit(id) } />
            )}
        </div>
    )
}

export default ProgramRemove;