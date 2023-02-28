import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

import {addProgramToProfile} from 'api/api';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import {editProgram, setMyPrograms, setNewGlobalProgram} from 'store/actions';
import {currentUser, selectProgramById} from 'store/selectors';

import CreateDay from './CreateDay/CreateDay';
import CreateExercises from './CreateExercises/CreateExercises';
import CreateName from './CreateName/CreateName';
import styles from './CreateProgramForm.module.scss';
import CreateType from './CreateType/CreateType';
import DifficultyLevel from "./DifficultyLevel/DifficultyLevel";

const CreateProgramForm = ({ isTrainer= false, isEditor = false }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useAppSelector(currentUser);
  const program = useAppSelector((state) => selectProgramById(state, id));
  const dispatch = useAppDispatch();
  const formValues =
    isEditor && program
      ? {
          title: `${program.title}`,
          author: `${program.author}`,
          typeOf: `${program.typeOf}`,
          level: `${program.level}`,
          days: program.days,
          comments: program.comments,
          id: program.id,
        }
      : {
          title: '',
          typeOf: 'aerobic',
          author: user ? user.displayName : 'unknown',
          level: '1',
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
        const programId = isEditor && program ? program.id : undefined;
        if (user) {
            if (!isTrainer) {
                isEditor ? dispatch(editProgram(user.id, programId, values)) : addProgramToProfile(user.id, values);
                dispatch(setMyPrograms(user.id));
            } else {
                dispatch(setNewGlobalProgram(values));
            }
        }
        navigate('/training/training_programs/');
        setSubmitting(false);
      }, 400);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.createProgramInfo}>
        <h2 className={styles.createProgramInfo__title}>New program</h2>
        <CreateName handleChange={handleChange} values={values} />
        <CreateType handleChange={handleChange} values={values} />
      </div>
        <div className={styles.level}>
            {program && isEditor
                ? <DifficultyLevel onChange={handleChange} levelDefault={program.level} />
                : <DifficultyLevel onChange={handleChange} />
            }
        </div>
      <div className={styles.createProgramWrite}>
        <CreateExercises values={values} handleChange={handleChange} setFieldValue={setFieldValue} />
        <CreateDay setFieldValue={setFieldValue} values={values} />
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
