import {useAppSelector} from "hooks/redux";
import {getAllState, getIsFetching, getMuscleGroups} from "store/selectors";
import Preloader from "components/Common/Preloader/Preloader";
import React from "react";
import styles from './MuscleGroupsList.module.scss'

const MuscleGroupsList = () => {
    const muscleGroups = useAppSelector(getMuscleGroups);
    const isFetching = useAppSelector(getIsFetching);
    const allState = useAppSelector(getAllState);
    console.log(allState);

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