import React from "react";
import {DayExerciseProps} from "components/Training/TrainingPrograms/ProgramExpand/ProgramExpandInfo/ProgramDaysList/ProgramDay/ExercisesList/DayExercise/DayExercise.types";


const DayExercise:React.FC<DayExerciseProps> = ({exercise}) => {
    return (
        <p title={`${exercise.name}`}>
          {exercise.id}: {exercise.name}
        </p>
    )
}

export default DayExercise