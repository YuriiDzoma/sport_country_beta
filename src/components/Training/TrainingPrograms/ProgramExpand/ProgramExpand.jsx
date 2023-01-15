import ProgramExpandInfo from "./ProgramExpandInfo/ProgramExpandInfo";
import ProgramExpandComments from "./ProgramExpandComments/ProgramExpandComments";
import {ProgramExpandProps} from "./ProgramExpand.types";
import React, {useEffect, useState} from "react";


const ProgramExpand = ({ programs, programId, addComment }) => {

    return (
        <div>
            {programs.map((item, index) => {
                if (item.id === programId) {

                    return (
                        <div key={index}>
                            <ProgramExpandInfo item={item}/>
                            <ProgramExpandComments addComment={addComment} program={item}/>
                        </div>
                    )
                }
            })}
        </div>
    )
}
export default ProgramExpand;