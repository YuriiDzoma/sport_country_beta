import {useAppDispatch, useAppSelector} from "hooks/redux";
import { getIsFetching, getMuscleGroups } from "store/selectors";
import Preloader from "components/Common/Preloader/Preloader";
import React from "react";
import styles from './MuscleGroupsList.module.scss'
import {setExercises} from "store/actions";

const MuscleGroupsList = () => {
    const dispatch = useAppDispatch();
    const muscleGroups = useAppSelector(getMuscleGroups);
    const isFetching = useAppSelector(getIsFetching);
    return (
        <div className={styles.groupsLinks}>
            {isFetching ? <Preloader /> : muscleGroups.map((item, index) => (
                <div key={index}>
                    <span onClick={() => dispatch(setExercises(item.exercises))} >{item.title}</span>
                </div>
            ))}
        </div>
    )
}

export default MuscleGroupsList;