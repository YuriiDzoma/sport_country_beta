import styles from "components/Profile/Publications/Publications.module.scss";
import SendIcon from "@mui/icons-material/Send";
import {useParams} from "react-router-dom";
import {useFormik} from "formik";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {currentUser} from "store/selectors";
import {addPostsImages, addPublicationToFB, getPostsImages} from "api/api";
import {addPost} from "store/users-slice";
import ImageIcon from '@mui/icons-material/Image';
import {useState} from "react";
import {v4} from "uuid";

const CreateEditPublication = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const myProfile = useAppSelector(currentUser);
    const [images,  setImages] = useState<any>(null)
    const setPictures = (values: any) => {
        setImages(values)
    }

    const initialFormValues = {
            author: myProfile ? myProfile.id : '',
            content: '',
            postId: '',
            pictures: [],
            date: '',
        };

    const loadPhoto = (e: any) => {
        setPictures(e.target.files[0]);
    }

    const { values, handleChange, resetForm, handleSubmit, setSubmitting, isSubmitting, dirty } = useFormik({
        initialValues: initialFormValues,

        onSubmit: (values) => {
            setTimeout(() => {
                values.date = new Date().toLocaleString();
                values.postId = v4();
                if (id && values && images) {
                    addPostsImages(images, values.postId)
                        .then(() => getPostsImages(values.postId))
                        .then(response => {
                            addPublicationToFB(id, {...values, pictures: [response]})
                                .then(response => dispatch(addPost(response))).then(() => console.log(values));
                        })
                } else {
                    if (id) {
                        addPublicationToFB(id, values).then(response => dispatch(addPost(response)));
                    }
                }
                setPictures(null)
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
                <input id='upload' type={'file'} hidden onChange={e => loadPhoto(e)} />
                <label className={styles.imagesLoad} htmlFor={'upload'}>
                    {images && images && (
                        <span className={styles.imagesLoad__counter}>{images.name}</span>
                    )}
                    <ImageIcon color={'primary'} />
                </label>
                <button className={styles.send} type="submit" disabled={isSubmitting || !dirty} >
                    <SendIcon color={'primary'} />
                </button>
            </div>

        </form>
    )
}

export default CreateEditPublication;