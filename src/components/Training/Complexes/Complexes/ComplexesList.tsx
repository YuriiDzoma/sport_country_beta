import React from "react";
import {ComplexesListProps} from "./ComplexesList.types";
import Complex from "./Complex/Complex";

const ComplexesList: React.FC<ComplexesListProps> = ({programs}) => {

    return (
        <>
            {programs && (
                programs.map((program, index) => <Complex key={index} program={program} />
                )
            )}
        </>
    )
}

export default ComplexesList;