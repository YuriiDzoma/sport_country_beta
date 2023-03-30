import styles from "components/Profile/Publications/Publications.module.scss";
import SendIcon from "@mui/icons-material/Send";
import {useParams} from "react-router-dom";
import {useFormik} from "formik";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {currentUser} from "store/selectors";
import {addPublicationToFB} from "api/api";
import {addPost} from "store/users-slice";
import ImageIcon from '@mui/icons-material/Image';

const CreateEditPublication = ({isEdit= false}) => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const myProfile = useAppSelector(currentUser);

    const initialFormValues = isEdit ? {
            date: '',
            author: '',
            content: '',
        } : {
            date: new Date().toLocaleString(),
            author: myProfile ? myProfile.id : '',
            content: '',
        };

    const { values, handleChange, resetForm, handleSubmit, setSubmitting, isSubmitting, dirty } = useFormik({
        initialValues: initialFormValues,

        onSubmit: (values) => {
            setTimeout(() => {
                if (id) {
                    addPublicationToFB(id, values).then(response => dispatch(addPost(response)));
                }
                setSubmitting(false);
                resetForm();
            }, 400);
        },
    });

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.publications__field}>
                <textarea id="content" name="content" onChange={handleChange} value={values.content} />
            </div>
            <div className={styles.publications__buttons}>
                <input id='upload' multiple type={'file'} hidden />
                <label className={styles.imagesLoad} htmlFor={'upload'}><ImageIcon color={'primary'} /></label>
                <button className={styles.send} type="submit" disabled={isSubmitting || !dirty} >
                    <SendIcon color={'primary'} />
                </button>
            </div>

        </form>
    )
}

export default CreateEditPublication;