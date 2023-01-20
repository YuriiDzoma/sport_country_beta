import ProgramExpandInfo from "./ProgramExpandInfo/ProgramExpandInfo";
import ProgramExpandComments from "./ProgramExpandComments/ProgramExpandComments";
import React from "react";
import {useParams} from "react-router-dom";
import {useAppSelector} from "hooks/redux";
import {selectProgramById} from "store/selectors";

const ProgramExpand = () => {

    const { id } = useParams()
    const program = useAppSelector((state) => selectProgramById(state, id));

    return (
        <div>
            {program && id && (
                <>
                    <ProgramExpandInfo program={program}/>
                    {/*<ProgramExpandComments />*/}
                </>
            )}
        </div>
    )
}
export default ProgramExpand;