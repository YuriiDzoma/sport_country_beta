import styles from './workProcess.module.scss';
import React from "react";
import {WorkProcessProps} from './WorkProcess.types';
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {useParams} from "react-router-dom";
import {useFormik} from 'formik';
import {addWorkHistory, editProgram} from "store/actions";
import {selectProgramById} from "store/selectors";
import {Day, Exercise, ExercisesProcess, Training} from "store/training-slice.types";
import {
    ProgramDayProps
} from "components/Training/TrainingPrograms/ProgramExpand/ProgramExpandInfo/ProgramDaysList/ProgramDay/ProgramDay.types";
import {fetchPrograms} from "api/api";
import {useNavigate} from "react-router";

const WorkProcess: React.FC<WorkProcessProps> = ({dayNumber}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {id} = useParams();
    const program = useAppSelector((state) => selectProgramById(state, id));

    const initialFormValues = program ? {
        title: `${program.title}`,
        typeOf: `${program.typeOf}`,
        days: program.days,
        comments: program.comments,
        id: program.id,
    } : {
        title: '',
        typeOf: '',
        comments: [{
            id: '',
            comment: '',
            date: '',
        }],
        days: [{
            day: '',
            exercises: [{
                id: '',
                name: '',
            }],
            workHistory: [{
                date: '',
                weights: [{
                    exerciseNumber: '',
                    weight: ''}],
            }],
            workProcess: {
                date: '',
                weights: [{
                    exerciseNumber: '',
                    weight: ''}]
            }
    }]
    };
    const saveValues = (values: any) => {
        dispatch(editProgram(values.id, values));
        setSubmitting(false);
    }
    const {handleChange, handleSubmit, setSubmitting, isSubmitting, dirty, resetForm, values} = useFormik({
        initialValues: initialFormValues,
        onSubmit: (values) => {
            setTimeout(() => {
                dispatch(addWorkHistory(dayNumber, values));
                setSubmitting(false);
                resetForm();
                navigate('/');
            }, 400);
        },
    });

    return (
        <form onSubmit={handleSubmit}>
            <>
                {program
                    ? values.days.map((day: any, number) => {
                        if (day.day === dayNumber) {
                            return (
                                <div key={number} className={styles.weightProcess}>
                                    <div key={dayNumber} className={styles.weightProcess_date}>
                                        <label htmlFor="date">New </label>
                                        <input id={`days.${number}.workProcess.date`}
                                               name={`days.${number}.workProcess.date`}
                                               placeholder='date'
                                               onChange={handleChange}
                                               value={values.days[number].workProcess.date}
                                         />
                                    </div>
                                    <div className={styles.weightProcess_weights}>
                                        {day.workProcess.weights.map((item: any, index: any) => {
                                            return (
                                                <div key={index}>
                                                    <input className={styles.field} onChange={handleChange}
                                                           id={`days.${number}.workProcess.weights.${index}.weight`}
                                                           name={`days.${number}.workProcess.weights.${index}.weight`}
                                                           value={values.days[number].workProcess.weights[index].weight}
                                                    />
                                                </div>
                                            )
                                        })}
                                        <div className={styles.completeTrain}>
                                            <button type='button' onClick={()=> saveValues(values)}>save</button>
                                            <button type='submit' disabled={isSubmitting || !dirty}>Complete</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                    : <>error</>}
            </>
        </form>
    )
}

export default WorkProcess;

// <div key={index}>
//     <input className={styles.field} onChange={handleChange}
//            id={`weights.${index}.weight`}
//            name={`weights.${index}.weight`}
//            value={values.weights[index].weight}
//     />
// </div>

// return (
//     <div key={dayNumber} className={styles.weightProcess}>
//         <h2>{day.day}</h2>
//         <div key={dayNumber} className={styles.weightProcess_date}>
//             <label htmlFor="date">New </label>
//             <input id='date' name='date'
//                    placeholder='date'
//                    onChange={handleChange}
//                    value={values.days[dayNumber].workProcess.date}/>
//         </div>
//         <div className={styles.weightProcess_weights}>
//             {day.workProcess.weights.map((item: any, index: any) => {
//                 return (
//                     <div key={index}>
//                         <input className={styles.field} onChange={handleChange}
//                                id={`weights.${index}.weight`}
//                                name={`weights.${index}.weight`}
//                                value={values.days[dayNumber].workProcess.weights[index].weight}
//                         />
//                     </div>
//                 )
//             })}
//             <div className={styles.completeTrain}>
//                 {/*<button type='button' onClick={()=> saveValues(id, values, dayIndex)}>save</button>*/}
//                 <button type='submit' disabled={isSubmitting || !dirty}>Complete</button>
//             </div>
//         </div>
//     </div>
// )