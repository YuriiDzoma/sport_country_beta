import {User} from "store/users-slice.types";
import styles from './ProfileInfo.module.scss'

interface ProfileInfoProps {
    profile: User
}

const ProfileInfo = ({profile}: ProfileInfoProps) => {
    return (
        <div className={styles.info}>
            {profile.city && (
                <p className={styles.info__city}>location: <span className={styles.info__text}>{profile.city}</span></p>
            )}
        </div>
    )
}

export default ProfileInfo;