import { useFormik } from 'formik';
import React, {useContext} from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import {addWorkHistory, editProgram, editUserProgram, fetchUserPrograms, setMyPrograms} from 'store/actions';
import {currentUser, getMyAllPrograms, getUserPrograms} from 'store/selectors';
import { Program } from 'store/training-slice.types';

import styles from './workProcess.module.scss';
import { WorkProcessProps } from './WorkProcess.types';
import {Context} from "components/Context/Context";

const WorkProcess: React.FC<WorkProcessProps> = ({ dayNumber }) => {
  const {isMyProfile, userId}: any = useContext(Context)
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const user = useAppSelector(currentUser);

  let programs
  if (isMyProfile) {
    programs = useAppSelector(getMyAllPrograms);
  } else  {
    programs = useAppSelector(getUserPrograms);
  }

  const initialFormValues = programs
    ? {
        programs: programs.map((program) => program),
      }
    : {
        error: '',
      };

  const saveValues = (values: Program) => {
    if (isMyProfile) {
      if (user) {
        dispatch(editProgram(user.id, values.id, values));
        dispatch(setMyPrograms(user.id));
      }
      setSubmitting(false);
    } else {
      if (userId) {
        dispatch(editUserProgram(userId, values.id, values));
        dispatch(fetchUserPrograms(userId));
      }
    }
    navigate('/training/training_programs/');
  };
  const { handleChange, handleSubmit, setSubmitting, isSubmitting, dirty, resetForm, values } = useFormik({
    initialValues: initialFormValues,
    onSubmit: (values) => {
      setTimeout(() => {
        const editedProgram = values.programs ? values.programs.find((item) => item.id === id) : null;
        if (editedProgram && user) {
          dispatch(addWorkHistory(user.id, dayNumber, editedProgram));
        }
        setSubmitting(false);
        if (user) {
          dispatch(setMyPrograms(user.id));
        }
        resetForm();
        navigate('/training/');
      }, 400);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <>
        {values.programs ? (
          values.programs.map((program, programIndex) => {
            if (program.id === id) {
              return (
                <div key={programIndex}>
                  {program.days.map((day: any, dayIndex) => {
                    if (day.day === dayNumber) {
                      return (
                        <div key={dayIndex} className={styles.weightProcess}>
                          <div className={styles.weightProcess_date}>
                            <label htmlFor="date">New </label>
                            <input
                              id={`programs.${programIndex}.days.${dayIndex}.workProcess.date`}
                              name={`programs.${programIndex}.days.${dayIndex}.workProcess.date`}
                              placeholder="date"
                              min="2010-01-01"
                              type={'date'}
                              onChange={handleChange}
                              value={values.programs[programIndex].days[dayIndex].workProcess.date}
                            />
                          </div>
                          <div className={styles.weightProcess_weights}>
                            {day.workProcess.weights.map((item: any, index: any) => {
                              return (
                                <div key={index}>
                                  <input
                                    className={styles.field}
                                    onChange={handleChange}
                                    id={`programs.${programIndex}.days.${dayIndex}.workProcess.weights.${index}.weight`}
                                    name={`programs.${programIndex}.days.${dayIndex}.workProcess.weights.${index}.weight`}
                                    value={
                                      values.programs[programIndex].days[dayIndex].workProcess.weights[index].weight
                                    }
                                  />
                                </div>
                              );
                            })}
                            <div className={styles.completeTrain}>
                              <button type="button" onClick={() => saveValues(values.programs[programIndex])}>
                                save
                              </button>
                              <button className={isMyProfile ? '' : styles.hide} type="submit" disabled={isSubmitting || !dirty}>
                                Complete
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              );
            }
          })
        ) : (
          <>{values.error}</>
        )}
      </>
    </form>
  );
};

export default WorkProcess;
