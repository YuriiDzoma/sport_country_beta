import BookmarkBorderTwoToneIcon from '@mui/icons-material/BookmarkBorderTwoTone';
import BookmarkTwoToneIcon from '@mui/icons-material/BookmarkTwoTone';
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
    const {programId} = useAppSelector(getFavoriteProgram);

    return (
        <div className={programId === id ? '' : styles.favorite}>
            {id && user && (
                <>
                    {programId !== id
                        ? <BookmarkBorderTwoToneIcon onClick={()=> setFavorite(user.id, id)} fontSize={'large'} />
                        : <BookmarkTwoToneIcon color={'secondary'} fontSize={'large'} />}
                </>
            )}
        </div>
    )
}

export default Favorite;