import {useAppSelector} from "hooks/redux";
import {getUserById} from "store/selectors";
import styles from './MyFollowers.module.scss'
import emptyProfileImage from "assets/img/emptyprofile.jpg";


const Follower = ({user}: {user: string}) => {
    const profile = useAppSelector((state) => getUserById(state, user));
    return (
        <div>
            {profile && (
                <div className={styles.follower}>
                    {profile.photoURL
                        ? <img className={styles.follower__photo} alt={'name'} src={profile.photoURL} />
                        : <img className={styles.follower__photo} alt={'name'} src={emptyProfileImage} />
                    }
                    <p className={styles.follower__name}>{profile.displayName}</p>
                </div>
            )}
        </div>
    )
}

export default Follower;