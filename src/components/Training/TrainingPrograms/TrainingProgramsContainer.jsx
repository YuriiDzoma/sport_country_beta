import styles from './TrainingPrograms.module.scss'
import {connect, useDispatch, useSelector} from "react-redux";
import ProgramsListLinks from "./ProgramList/ProgramsListLinks";
import {addComment, addProgram, editProgram} from "../../../store/training-reducer";
import {Route, Routes} from "react-router-dom";
import ProgramCreateButton from "./ProgramCreateButton/ProgramCreateButton";
import React, {useEffect, useState} from "react";
import ProgramExpand from "./ProgramExpand/ProgramExpand";
import { getPrograms } from "../../../store/training-selectors";
import CreateProgramForm from "./ProgramCreate/CreateProgramForm";
import {fetchPrograms} from "../../../store/ActionCreators";


const TrainingProgramsContainer = ({
                                                                                 addProgram, editProgram,
                                                                                 addComment
                                                                             }) => {

    const [programValue, setProgramValue] = useState();


    const getProgram = (value) => {
        setProgramValue(value);
    }

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchPrograms())
    }, [])

    const programs = useSelector(state => state.training.programs)

    return (

        <div className={styles.trainProgramContainer}>
            <div className={styles.programsList}>

                <ProgramCreateButton/>
                <ProgramsListLinks getProgram={getProgram} programs={programs}/>

            </div>
            <div className={styles.programsContent}>

                <Routes>
                    <Route path={'create/'} element={<CreateProgramForm
                        isEditor={false} addProgram={addProgram}/>}/>

                    <Route path={":id"} element={<ProgramExpand
                        addComment={addComment} programs={programs}/>}/>

                    <Route path={`:id/redactor/`} element={<CreateProgramForm
                        isEditor={true} programValue={programValue} editProgram={editProgram}/>}/>
                </Routes>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    programs: getPrograms(state)
})

export default connect(mapStateToProps, {addProgram, addComment, editProgram})(TrainingProgramsContainer);