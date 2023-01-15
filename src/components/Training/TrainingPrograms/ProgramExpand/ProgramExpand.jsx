import ProgramExpandInfo from "./ProgramExpandInfo/ProgramExpandInfo";
import ProgramExpandComments from "./ProgramExpandComments/ProgramExpandComments";
import {ProgramExpandProps} from "./ProgramExpand.types";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


const ProgramExpand = ({ programs, addComment }) => {

    const { id } = useParams()

    return (
        <div>
            {programs.map((item, index) => {
                if (item.id === id) {

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