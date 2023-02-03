import styles from './workProcess.module.scss';
import React from "react";
import { WorkProcessProps } from './WorkProcess.types';
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {useParams} from "react-router-dom";
import { useFormik } from 'formik';
import {addWorkHistory} from "store/actions";

const WorkProcess: React.FC<WorkProcessProps> = ({day, dayIndex }) => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const initialFormValues = {
        date: '',
        weights: day.workProcess.weights.map((item, index) => {
            return {
                exerciseNumber: item.exerciseNumber,
                weight: '',
            }
        })
    };

    const { handleChange, handleSubmit, setSubmitting, isSubmitting, dirty, resetForm, values } = useFormik({
        initialValues: initialFormValues,
        onSubmit: (values) => {
            setTimeout(() => {
                dispatch(addWorkHistory(id, values));
                setSubmitting(false);
                resetForm();
            }, 400);
        },
    });

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.weightProcess}>
                <div className={styles.weightProcess_date}>
                    <label htmlFor="date">New </label>
                    <input id='date' name='date' placeholder='date' onChange={handleChange} value={values.date} />
                </div>
                <div className={styles.weightProcess_weights}>
                    {day.workProcess.weights.map((item, index) => (
                        <div key={index}>
                            <input className={styles.field} onChange={handleChange}
                                   id={`weights.${index}.weight`}
                                   name={`weights.${index}.weight`} />
                        </div>
                    ))}
                    <div className={styles.completeTrain}>
                        <button type='submit' disabled={isSubmitting || !dirty} >Complete</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default WorkProcess;