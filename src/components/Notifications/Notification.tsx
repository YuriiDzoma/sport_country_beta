import {useAppSelector} from "hooks/redux";
import {getUserById} from "store/selectors";
import styles from './Notifications.module.scss'
import emptyProfileImage from "assets/img/emptyprofile.jpg";
import React from "react";
import {Link} from "react-router-dom";

interface NotificationProps {
    item: string
}

const Notification = ({item}: NotificationProps) => {
    const profile = useAppSelector((state) => getUserById(state, item));
    return (
        <div>
            {profile && (
                <div className={styles.notification}>
                    <Link className={styles.notification__userLink} to={'/profile/' + profile.id}>
                        <img alt='user' className={styles.notification__photo}
                             src={profile.photoURL ? profile.photoURL : emptyProfileImage}>
                        </img>
                        <span className={styles.notification__name}>{profile.displayName}</span>
                    </Link>
                    <span className={styles.notification__text}>subscribed to you</span>
                    <button className={styles.notification__follow}>follow</button>
                    <button className={styles.notification__hide}>hide</button>
                </div>
            )}
        </div>
    )
}

export default Notification;