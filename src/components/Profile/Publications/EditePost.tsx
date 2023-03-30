import {useAppDispatch} from "hooks/redux";
import {Publication} from "store/users-slice.types";
import {useFormik} from "formik";
import styles from './Publications.module.scss'
import {editPublication} from "api/api";
import {useParams} from "react-router-dom";
import {editPost} from "store/users-slice";

interface EditePostProps {
    item: Publication,
    setPostId: (id: string) => void
}

const EditePost = ({item, setPostId}: EditePostProps) => {
    const dispatch = useAppDispatch();
    const { id } = useParams();

    const initialFormValues = {
        date: item.date,
        author: item.author,
        content: item.content,
        id: item.id,
    }

    const { values, handleChange, resetForm, handleSubmit, setSubmitting, isSubmitting, dirty } = useFormik({
        initialValues: initialFormValues,

        onSubmit: (values) => {
            setTimeout(() => {
                if (id) {
                    editPublication(id, values.id, values).then(response => dispatch(editPost(response)))
                }
                resetForm()
                setSubmitting(false);
                setPostId('0')
            }, 400);
        },
    });

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.editor}>
                <textarea className={styles.editor__field} id="content" name="content" onChange={handleChange} value={values.content} />
                <button className={styles.editor__button} type="submit" disabled={isSubmitting || !dirty}>save</button>
            </div>
        </form>
    )
}

export default EditePost;