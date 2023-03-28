import {Publication} from "store/users-slice.types";
import styles from './Publications.module.scss'
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {currentUser, getUserById} from "store/selectors";
import ClearIcon from '@mui/icons-material/Clear';
import {deletePublication} from "api/api";
import {useParams} from "react-router-dom";
import {removePost} from "store/users-slice";


const Post = ({item}: {item: Publication}) => {
    const myProfile = useAppSelector(currentUser);
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const profile = useAppSelector((state) => getUserById(state, item.author));

    const deletePost = (postId: string) => {
        if (id) {
            deletePublication(id, postId).then(response => dispatch(removePost(response)));
        }
    }

    return (
        <div className={styles.post}>
            {id && myProfile && (myProfile.id === item.author || myProfile.id === id) &&(
                <div className={styles.post__delete}>
                    <button onClick={()=> deletePost(item.id)}><ClearIcon color={'warning'} /></button>
                </div>
            )}
            <p className={styles.post__content}>
                {item.content}
            </p>
            {profile && (
                <div className={styles.post__sender}>
                    <span className={styles.time}>{item.date}</span>
                    <p className={styles.author}>
                        {profile.displayName}
                    </p>
                </div>
            )}
        </div>
    )
}

export default Post;