import {useAppSelector} from "hooks/redux";
import {getIsFetching, getMuscleGroups} from "store/selectors";
import Preloader from "components/Common/Preloader/Preloader";
import React from "react";

const MuscleGroupsList = () => {
    const muscleGroups = useAppSelector(getMuscleGroups);
    const isFetching = useAppSelector(getIsFetching);
    return (
        <div>
            {isFetching ? <Preloader /> : muscleGroups.map((item, index) => (
                <span key={index}>{item.title}</span>
            ))}
        </div>
    )
}

export default MuscleGroupsList;