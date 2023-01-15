import React from "react";
import {DayExerciseProps} from "./DayExercise.types";


const DayExercise:React.FC<DayExerciseProps> = ({exercise}) => {
    return (
        <p>
          {exercise.id}: {exercise.name}
        </p>
    )
}

export default DayExercise