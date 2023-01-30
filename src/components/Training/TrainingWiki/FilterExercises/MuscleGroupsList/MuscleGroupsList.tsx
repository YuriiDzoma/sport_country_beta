import {useAppSelector} from "hooks/redux";
import {getIsFetching, getMuscleGroups} from "store/selectors";
import Preloader from "components/Common/Preloader/Preloader";
import React from "react";
import styles from './MuscleGroupsList.module.scss'

const MuscleGroupsList = () => {
    const muscleGroups = useAppSelector(getMuscleGroups);
    const isFetching = useAppSelector(getIsFetching);

    return (
        <div className={styles.groupsLinks}>
            {isFetching ? <Preloader /> : muscleGroups.map((item, index) => (
                <div key={index}>
                    <span>{item.title}</span>
                </div>
            ))}
        </div>
    )
}

export default MuscleGroupsList;