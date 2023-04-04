import {Publication} from "store/users-slice.types";
import styles from './Post.module.scss'
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {currentUser, getUserById} from "store/selectors";
import ClearIcon from '@mui/icons-material/Clear';
import {deletePostsImages, deletePublication} from "api/api";
import {Link, useParams} from "react-router-dom";
import {removePost} from "store/users-slice";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import {useState} from "react";
import EditePost from "./../EditePost";
import PostPictures from "components/Profile/Publications/Post/PostPictures/PostPictures";



const Post = ({item}: {item: Publication}) => {
    const [postEdit, serPostEdit] = useState('0');
    const setPostId = (id: string) => {
        serPostEdit(id)
    }
    const myProfile = useAppSelector(currentUser);
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const profile = useAppSelector((state) => getUserById(state, item.author));

    const deletePost = (postId: string) => {
        if (id) {
            item.pictures.length !== 0
                ? deletePublication(id, postId)
                    .then(response => dispatch(removePost(response)))
                    .then(() => deletePostsImages(item.postId))
                : deletePublication(id, postId).then(response => dispatch(removePost(response)))
        }
    }

    return (
        <div className={styles.post}>
            {id && myProfile && postEdit !== item.id && (myProfile.id === item.author || myProfile.id === id)  &&(
                <div className={styles.post__delete}>
                    {myProfile.id === item.author && (
                        <button>
                            <DriveFileRenameOutlineIcon onClick={() => setPostId(item.id)} color={'primary'} />
                        </button>
                    )}

                    <button className={styles.remove} onClick={()=> deletePost(item.id)}>
                        <ClearIcon color={'warning'} />
                    </button>
                </div>
            )}
            {postEdit && postEdit === item.id
                ? <EditePost setPostId={setPostId} item={item}/>
                : <p className={styles.post__content}>
                    {item.content}
                </p>
            }
            {item.pictures.length !== 0 && (
                <PostPictures pictures={item.pictures} />
            )}
            {profile && (
                <div className={styles.post__sender}>
                    <span className={styles.time}>{item.date}</span>
                    <Link to={'/profile/' + profile.id} className={styles.author}>
                        {profile.displayName}
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Post;