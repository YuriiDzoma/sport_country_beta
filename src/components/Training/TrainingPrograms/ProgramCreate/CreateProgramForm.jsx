import {useFormik} from "formik";
import {useNavigate} from "react-router";
import styles from "../TrainingPrograms.module.scss";
import CreateName from "./CreateName/CreateName";
import CreateType from "./CreateType/CreateType";
import CreateExercises from "./CreateExercises/CreateExercises";
import CreateDay from "./CreateDay/CreateDay";
import {editProgram, setNewProgram} from "api/api";
import { v4 } from 'uuid';

const CreateProgramForm = (props) => {

    const navigate = useNavigate();

    const formValues = props.isEditor
        ? {
            title: `${props.programValue.title}`, typeOf: `${props.programValue.typeOf}`, days: props.programValue.days
        }
        : {
            title: '', typeOf: 'aerobic', days: [
                {day: 1, exercises: [{id: 1, name: ''}, {id: 2, name: ''}, {id: 3, name: ''}]}
            ],
        }


    const formik = useFormik({

        initialValues: formValues,

        onSubmit: values => {
            setTimeout(() => {
                const programId = props.isEditor ? props.programValue.id : null;
                values = {...values, id: v4(), comments: []}
                props.isEditor
                    ? editProgram(programId, values)
                    : setNewProgram(values);
                navigate('/training/training_programs/');
                formik.setSubmitting(false);
            }, 400);
        },

    });

    return (
        <form onSubmit={formik.handleSubmit}>

            <div className={styles.createProgramInfo}>

                <CreateName formik={formik} />
                <CreateType formik={formik} />
            </div>

            <div className={styles.createProgramWrite}>

                <CreateExercises formik={formik} />
                <CreateDay formik={formik} />

            </div>
            <div className={styles.createProgramWrite_create}>

                <button type="submit" disabled={formik.isSubmitting}>
                    <span>{props.isEditor
                        ? <span>confirm changes</span>
                        : <span>Create</span>}</span>
                </button>

            </div>
        </form>
    )
}

export default CreateProgramForm;