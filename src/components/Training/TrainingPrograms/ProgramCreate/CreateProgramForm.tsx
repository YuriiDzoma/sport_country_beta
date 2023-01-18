import {useFormik} from "formik";
import {useNavigate} from "react-router";
import styles from "./CreateProgramForm.module.scss";
import CreateName from "./CreateName/CreateName";
import CreateType from "./CreateType/CreateType";
import CreateExercises from "./CreateExercises/CreateExercises";
import CreateDay from "./CreateDay/CreateDay";
import {editProgram, fetchPrograms, setNewProgram} from 'store/ActionCreators';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {selectProgramById} from "store/selectors";
import GoBack from "components/Common/GoBack/GoBack";

const CreateProgramForm = ({isEditor = false}) => {

    const navigate = useNavigate();
    const { id } = useParams()
    const program = useAppSelector((state) => selectProgramById(state, id));
    const dispatch = useAppDispatch()
    const formValues = isEditor && program
        ? {
            title: `${program.title}`, typeOf: `${program.typeOf}`, days: program.days
        }
        : {
            title: '', typeOf: 'aerobic', days: [
                {day: 1, exercises: [{id: 1, name: ''}, {id: 2, name: ''}, {id: 3, name: ''}]}
            ],
        }

    const {setSubmitting, handleSubmit, isSubmitting, handleChange, values, setFieldValue} = useFormik({

        initialValues: formValues,

        onSubmit: values => {
            setTimeout(() => {
                const programId = isEditor && program ? program.id : undefined;
                values = isEditor && program ? {...values} : {...values}
                isEditor
                    ? editProgram(programId, values)
                    : setNewProgram(values);
                navigate('/training/training_programs/');
                setSubmitting(false);
                dispatch(fetchPrograms())
            }, 400);
        },

    });

    return (
        <form onSubmit={handleSubmit}>

            <div className={styles.createProgramInfo}>

                <CreateName handleChange={handleChange} values={values} />
                <CreateType handleChange={handleChange} values={values} />
            </div>

            <div className={styles.createProgramWrite}>

                <CreateExercises values={values} handleChange={handleChange} setFieldValue={setFieldValue} />
                <CreateDay setFieldValue={setFieldValue} values={values}/>

            </div>
            <div className={styles.createProgramWrite_create}>

                <button type="submit" disabled={isSubmitting}>
                    <span>{isEditor
                        ? <span>confirm changes</span>
                        : <span>Create</span>}</span>
                </button>


            </div>
        </form>
    )
}

export default CreateProgramForm;