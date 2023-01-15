import DayExercise from "./DayExercise/DayExercise";
import {ProgramDayProps} from "./ProgramDay.types";
import React from "react";



const ProgramDay: React.FC<ProgramDayProps> = ({day}) => {
    return (
        <div>
            <span>Day {day.day}</span>

            {day.exercises.map((exercise) => <DayExercise key={exercise.id} exercise={exercise} />

            )}
        </div>
    )
}

export default ProgramDay