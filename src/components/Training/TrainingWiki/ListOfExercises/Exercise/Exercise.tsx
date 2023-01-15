import React from "react";
import {ExerciseProps} from "./Exercise.types";



const Exercise: React.FC<ExerciseProps> = ({item}) => {
    return (
        <div>
            <span>{item.name}</span>
        </div>
    )
}

export default Exercise