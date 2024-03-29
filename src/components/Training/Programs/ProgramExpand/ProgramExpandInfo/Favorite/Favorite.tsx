import BookmarkBorderTwoToneIcon from '@mui/icons-material/BookmarkBorderTwoTone';
import BookmarkTwoToneIcon from '@mui/icons-material/BookmarkTwoTone';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import styles from './Favorite.module.scss'
import {useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {currentUser, getFavoriteProgram} from "store/selectors";
import {setFavoriteProgram} from "api/api";
import {setUserFavoriteProgram} from "store/users-slice";

const Favorite = () => {
    const dispatch = useAppDispatch();
    const {id} = useParams()
    const user = useAppSelector(currentUser);
    const setFavorite = (userID: string, id: string) => {
        setFavoriteProgram(userID, id).then(response => dispatch(setUserFavoriteProgram(response)));
    }
    const favorite = useAppSelector(getFavoriteProgram);

    return (
        <div className={styles.favorite}>
            {id && user && (
                <>
                    {!favorite || favorite.programId !== id
                        ? <BookmarkBorderTwoToneIcon onClick={() => setFavorite(user.id, id)}/>
                        : <BookmarkIcon/>
                    }
                </>
            )}
        </div>
    )
}

export default Favorite;