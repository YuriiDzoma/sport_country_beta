import {useFormik} from "formik";
import {useNavigate} from "react-router";
import styles from "./CreateProgramForm.module.scss";
import CreateName from "./CreateName/CreateName";
import CreateType from "./CreateType/CreateType";
import CreateExercises from "./CreateExercises/CreateExercises";
import CreateDay from "./CreateDay/CreateDay";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {selectProgramById} from "store/selectors";
import {editProgram, setNewProgram} from "store/actions";
import {fetchPrograms} from "api/api";

const CreateProgramForm = ({isEditor = false}) => {

    const navigate = useNavigate();
    const { id } = useParams()
    const program = useAppSelector((state) => selectProgramById(state, id));
    const dispatch = useAppDispatch()
    const formValues = isEditor && program
        ? {
            title: `${program.title}`,
            typeOf: `${program.typeOf}`,
            days: program.days,
            comments: program.comments,
            id: program.id,
        }
        : {
            title: '', typeOf: 'aerobic', comments: [], days: [
                {
                    day: 1, exercises: [
                        {id: 1, name: ''},
                        {id: 2, name: ''},
                        {id: 3, name: ''},
                    ], workHistory: [], workProcess: {date:'', weights:[
                            {exerciseNumber: 1, weight: ''},
                            {exerciseNumber: 2, weight: ''},
                            {exerciseNumber: 3, weight: ''},
                        ]},
                }
            ]
        }

    const {setSubmitting, handleSubmit, isSubmitting, handleChange, values, setFieldValue} = useFormik({

        initialValues: formValues,

        onSubmit: values => {
            setTimeout(() => {
                const programId = isEditor && program ? program.id : undefined;
                values = isEditor && program ? {...values} : {...values}
                isEditor
                    ? dispatch(editProgram(programId, values))
                    : dispatch(setNewProgram(values));
                dispatch(fetchPrograms());
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