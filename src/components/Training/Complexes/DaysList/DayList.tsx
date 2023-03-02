import React from "react";
import {DayListProps} from "./DayList.types";
import DayExercisesList from './DayExercisesList/DayExercisesList';

const DayList: React.FC<DayListProps> = ({days}) => {
    return (
        <>
            {days.map((day, index) => {
                return (
                    <DayExercisesList key={index} exercises={day.exercises} />
                )
            })}
        </>
    )
}

export default DayList