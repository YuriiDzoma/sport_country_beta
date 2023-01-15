import DayExercise from "./DayExercise/DayExercise";
import {ProgramDayProps} from "./ProgramDay.types";
import React from "react";



const ProgramDay: React.FC<ProgramDayProps> = ({day}) => {
    return (
        <div >
            <h3>Day {day.day}</h3>

            {day.exercises.map((exercise) => <DayExercise key={exercise.id} exercise={exercise} />

            )}
        </div>
    )
}

export default ProgramDay