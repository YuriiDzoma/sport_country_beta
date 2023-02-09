import styles from './workProcess.module.scss';
import React from "react";
import {WorkProcessProps} from './WorkProcess.types';
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {useParams} from "react-router-dom";
import {useFormik} from 'formik';
import {addWorkHistory, editProgram} from "store/actions";
import {getPrograms} from "store/selectors";
import {useNavigate} from "react-router";
import {fetchPrograms} from "api/api";

const WorkProcess: React.FC<WorkProcessProps> = ({dayNumber}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {id} = useParams();
    const programs = useAppSelector(getPrograms);
    const initialFormValues = programs ? {
        programs: programs.map((program) => program),
    } : {
        error: '',
    };
    const saveValues = (values: any) => {
        dispatch(editProgram(values.id, values));
        setSubmitting(false);
        dispatch(fetchPrograms());
        navigate('/training/training_programs/');
    }
    const {handleChange, handleSubmit, setSubmitting, isSubmitting, dirty, resetForm, values} = useFormik({
        initialValues: initialFormValues,
        onSubmit: (values) => {
            setTimeout(() => {
                const editedProgram = values.programs ? values.programs.find((item) => item.id === id) : null;
                dispatch(addWorkHistory(dayNumber, editedProgram));
                console.log(editedProgram)
                setSubmitting(false);
                dispatch(fetchPrograms());
                resetForm();
                navigate('/training/training_programs/');
            }, 400);
        },
    });
    return (
        <form onSubmit={handleSubmit}>
            <>
                {values.programs
                    ? values.programs.map((program, programIndex) => {
                        if (program.id === id) {
                            return (
                                <div key={programIndex}>
                                    {program.days.map((day: any, dayIndex) => {
                                        if (day.day === dayNumber) {
                                            return (
                                                <div key={dayIndex} className={styles.weightProcess}>
                                                    <div className={styles.weightProcess_date}>
                                                        <label htmlFor="date">New </label>
                                                        <input id={`programs.${programIndex}.days.${dayIndex}.workProcess.date`}
                                                               name={`programs.${programIndex}.days.${dayIndex}.workProcess.date`}
                                                               placeholder='date'
                                                               onChange={handleChange}
                                                               value={values.programs[programIndex].days[dayIndex].workProcess.date}
                                                        />
                                                    </div>
                                                    <div className={styles.weightProcess_weights}>
                                                        {day.workProcess.weights.map((item: any, index: any) => {
                                                            return (
                                                                <div key={index}>
                                                                    <input className={styles.field} onChange={handleChange}
                                                                           id={`programs.${programIndex}.days.${dayIndex}.workProcess.weights.${index}.weight`}
                                                                           name={`programs.${programIndex}.days.${dayIndex}.workProcess.weights.${index}.weight`}
                                                                           value={values.programs[programIndex].days[dayIndex].workProcess.weights[index].weight}
                                                                    />
                                                                </div>
                                                            )
                                                        })}
                                                        <div className={styles.completeTrain}>
                                                            <button type='button' onClick={() => saveValues(values.programs[programIndex])}>save
                                                            </button>
                                                            <button type='submit' disabled={isSubmitting || !dirty}>Complete
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            )
                        }
                    }) : <>{values.error}</>}
            </>
        </form>
    )
}

export default WorkProcess;