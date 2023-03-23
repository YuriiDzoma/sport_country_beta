import {useAppDispatch, useAppSelector} from "hooks/redux";
import {currentUser, getUserById} from "store/selectors";
import styles from './Notifications.module.scss'
import emptyProfileImage from "assets/img/emptyprofile.jpg";
import React from "react";
import {Link} from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import {addNewFriend, getUserFriends, removeNotification} from "api/api";
import {setMyFollowers} from "store/users-slice";
import {clearNotifications} from "store/profile-slice";

interface NotificationProps {
    item: string
}

const Notification = ({item}: NotificationProps) => {
    const dispatch = useAppDispatch();
    const profile = useAppSelector((state) => getUserById(state, item));
    const myProfile = useAppSelector(currentUser);
    const follow = (myProfileID: string, FriendId: string) => {
        addNewFriend(myProfileID, FriendId);
        if (myProfile) {
            getUserFriends(myProfile.id).then(response => dispatch(setMyFollowers(response)))
            removeNotification(FriendId, myProfileID).then(response => dispatch(clearNotifications(response)))
        }
    }
    const deleteNotification = (myId: string, profileId: string) => {
        removeNotification(profileId, myId).then(response => dispatch(clearNotifications(response)))
    }
    return (
        <div>
            {profile && myProfile && (
                <div className={styles.notification}>
                    <Link className={styles.notification__userLink} to={'/profile/' + profile.id}>
                        <img alt='user' className={styles.notification__photo}
                             src={profile.photoURL ? profile.photoURL : emptyProfileImage}>
                        </img>
                        <span className={styles.notification__name}>{profile.displayName}</span>
                    </Link>
                    <span className={styles.notification__text}>subscribed to you</span>
                    {profile.isFriend ? null : <button onClick={() => follow(myProfile.id, profile.id)} className={styles.notification__follow}>follow</button>}
                    <CloseIcon onClick={() => deleteNotification(myProfile.id, profile.id)} className={styles.notification__hide} />
                </div>
            )}
        </div>
    )
}

export default Notification;