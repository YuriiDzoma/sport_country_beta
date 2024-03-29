import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

import {createNewProgram} from 'api/api';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import {editProgram, editUserProgram, setMyPrograms, setNewGlobalProgram} from 'store/actions';
import {currentUser, selectProgramById, selectUserProgramById} from 'store/selectors';

import CreateDay from './CreateDay/CreateDay';
import CreateExercises from './CreateExercises/CreateExercises';
import CreateName from './CreateName/CreateName';
import styles from './CreateProgramForm.module.scss';
import CreateType from './CreateType/CreateType';
import DifficultyLevel from "./DifficultyLevel/DifficultyLevel";
import React, {useContext} from "react";
import {CreateProgramFormProps} from "./CreateProgramForm.types";
import {addProgramToState} from "store/profile-slice";
import {addUserProgramToState} from "store/users-slice";
import {Context} from "components/Context/Context";

const CreateProgramForm = ({toGlobal = false, isEditor = false,}: CreateProgramFormProps) => {
  const {isMyProfile, userId}: any = useContext(Context)
  const navigate = useNavigate();
  const user = useAppSelector(currentUser);
  const {id} = useParams()
  const myProgram = useAppSelector((state) => selectProgramById(state, id));
  const clientProgram = useAppSelector((state) => selectUserProgramById(state, id));
  const dispatch = useAppDispatch();
  const formValues =
    isEditor && isMyProfile && myProgram
      ? {
          title: `${myProgram.title}`,
          author: `${myProgram.author}`,
          typeOf: `${myProgram.typeOf}`,
          level: myProgram.level,
          days: myProgram.days,
          comments: myProgram.comments,
          id: myProgram.id,
        } : isEditor && !isMyProfile && clientProgram
            ? {
                title: `${clientProgram.title}`,
                author: `${clientProgram.author}`,
                typeOf: `${clientProgram.typeOf}`,
                level: clientProgram.level,
                days: clientProgram.days,
                comments: clientProgram.comments,
                id: clientProgram.id,
            }
      : {
          title: '',
          typeOf: 'aerobic',
          author: user ? user.displayName : 'unknown',
          level: 1,
          comments: [],
          id: '',
          days: [
            {
              day: 1,
              exercises: [
                { id: 1, name: '' },
                { id: 2, name: '' },
                { id: 3, name: '' },
              ],
              workHistory: [],
              workProcess: {
                date: '',
                weights: [
                  { exerciseNumber: 1, weight: '' },
                  { exerciseNumber: 2, weight: '' },
                  { exerciseNumber: 3, weight: '' },
                ],
              },
            },
          ],
        };

  const { setSubmitting, handleSubmit, isSubmitting, handleChange, values, setFieldValue } = useFormik({
    initialValues: formValues,

    onSubmit: (values) => {
      setTimeout(() => {
        if (user) {
            if (!toGlobal) {
                if (isEditor && isMyProfile && myProgram) {
                    dispatch(editProgram(user.id, myProgram.id, values));
                    dispatch(setMyPrograms(user.id));
                } if (isMyProfile && !isEditor) {
                    createNewProgram(user.id, values);
                    dispatch(addProgramToState(values));
                    dispatch(setMyPrograms(user.id));
                } if (!isEditor && !isMyProfile && id) {
                    createNewProgram(id, values);
                    dispatch(addUserProgramToState(values));
                } if (isEditor && !isMyProfile && clientProgram && userId) {
                    dispatch(editUserProgram(userId, clientProgram.id, values));
                }
            } else {
                dispatch(setNewGlobalProgram(values));
            }
        }
        toGlobal ? navigate('/training/') : navigate(-1)
        setSubmitting(false);
      }, 400);
    },
  });

  return (
    <form className={styles.createProgramInfo__form} onSubmit={handleSubmit}>
      <div className={styles.createProgramInfo}>
        <h2 className={styles.createProgramInfo__title}>New program</h2>
        <CreateName handleChange={handleChange} title={values.title} />
        <CreateType handleChange={handleChange} typeOf={values.typeOf} />
      </div>
        <div className={styles.level}>
            {myProgram && isEditor
                ? <DifficultyLevel onChange={handleChange} levelDefault={myProgram.level}/>
                : isEditor && clientProgram ?
                    <DifficultyLevel onChange={handleChange} levelDefault={clientProgram.level}/>
                    : <DifficultyLevel onChange={handleChange}/>
            }
        </div>
      <div className={styles.createProgramWrite}>
        <CreateExercises days={values.days} handleChange={handleChange} setFieldValue={setFieldValue} />
        <CreateDay setFieldValue={setFieldValue} days={values.days} />
        <div className={styles.createProgramWrite_create}>
          <button type="submit" disabled={isSubmitting}>
            <span>{isEditor ? <span>confirm changes</span> : <span>save</span>}</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateProgramForm;
