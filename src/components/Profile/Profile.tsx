import styles from './Profile.module.scss'
import {useAppSelector} from "hooks/redux";
import {getUserById} from "store/selectors";
import {useParams} from "react-router-dom";

const Profile = () => {
    const { id } = useParams()
    const profile = useAppSelector((state) => getUserById(state, id));

    return (
        <div className={styles.profile}>
            {profile && id && (
                <><span>{profile.displayName}</span></>
            )}
        </div>
    )
}

export default Profile;