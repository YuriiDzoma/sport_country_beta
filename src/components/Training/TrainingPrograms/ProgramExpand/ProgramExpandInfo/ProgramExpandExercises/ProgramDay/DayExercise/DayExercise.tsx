import React from "react";
import {DayExerciseProps} from "./DayExercise.types";


const DayExercise:React.FC<DayExerciseProps> = ({exercise}) => {
    return (
        <div>
            <span>{exercise.id}: </span>
            <span>{exercise.name}</span>
        </div>
    )
}

export default DayExercise