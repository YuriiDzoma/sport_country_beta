import {useAppDispatch, useAppSelector} from "hooks/redux";
import { getIsFetching, getMuscleGroups } from "store/selectors";
import React, {useState} from "react";
import styles from './MuscleGroupsList.module.scss'
import {setExercises} from "store/actions";
import {muscleGroup} from "store/wikiExercises-slyce.types";
import CircularProgress from '@mui/material/CircularProgress';

const MuscleGroupsList = () => {
    const [activeLink, setActiveLink] = useState('');

    const onChangeGroup = (item: muscleGroup) => {
        dispatch(setExercises(item.exercises));
        setActiveLink(item.id)
    }
    const dispatch = useAppDispatch();
    const muscleGroups = useAppSelector(getMuscleGroups);
    const isFetching = useAppSelector(getIsFetching);
    return (
        <div className={styles.groupsLinks}>
            {isFetching ? <CircularProgress /> : muscleGroups.map((item, index) =>
                <a className={activeLink === item.id ? styles.activeLink : '' }
                   key={index} onClick={() => onChangeGroup(item) } >{item.title}</a>)}
        </div>
    )
}

export default MuscleGroupsList;