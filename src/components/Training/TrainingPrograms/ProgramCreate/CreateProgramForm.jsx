import {useFormik} from "formik";
import {useNavigate} from "react-router";
import styles from "../TrainingPrograms.module.scss";
import CreateName from "./CreateName/CreateName";
import CreateType from "./CreateType/CreateType";
import CreateExercises from "./CreateExercises/CreateExercises";
import CreateDay from "./CreateDay/CreateDay";
import {editProgram, setNewProgram} from 'store/ActionCreators';
import { v4 } from 'uuid';
import {useParams} from "react-router-dom";
import {useAppSelector} from "hooks/redux";
import {selectProgramById} from "store/selectors";

const CreateProgramForm = ({isEditor}) => {

    const navigate = useNavigate();
    const { id } = useParams()
    const program = useAppSelector((state) => selectProgramById(state, id));

    const formValues = isEditor
        ? {
            title: `${program.title}`, typeOf: `${program.typeOf}`, days: program.days
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
                const programId = isEditor ? program.id : null;
                values = {...values, id: v4(), comments: []}
                isEditor
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
                    <span>{isEditor
                        ? <span>confirm changes</span>
                        : <span>Create</span>}</span>
                </button>

            </div>
        </form>
    )
}

export default CreateProgramForm;