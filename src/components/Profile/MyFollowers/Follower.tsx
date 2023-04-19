import {useAppSelector} from "hooks/redux";
import {getUserById} from "store/selectors";
import styles from './MyFollowers.module.scss'
import emptyProfileImage from "assets/img/notAvatar.png";
import {Link} from "react-router-dom";


const Follower = ({user}: {user: string}) => {
    const profile = useAppSelector((state) => getUserById(state, user));
    return (
        <>
            {profile && (
                <div className={styles.follower}>
                    <Link className={styles.userBlock__link} to={'/profile/' + user}>
                        {profile.photoURL
                            ? <img className={styles.follower__photo} alt={'name'} src={profile.photoURL}/>
                            : <img className={styles.follower__photo} alt={'name'} src={emptyProfileImage}/>
                        }
                        <p className={styles.follower__name}>{profile.displayName}</p>
                    </Link>

                </div>
            )}
        </>
    )
}

export default Follower;