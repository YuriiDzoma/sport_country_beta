import React from 'react';
import {Link} from 'react-router-dom';

import emptyProfileImage from 'assets/img/notAvatar.png';
import {UserProps} from 'components/Users/User/User.types';

import styles from './User.module.scss';
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {currentUser, getUserById} from "store/selectors";
import {addNewFriend, createNotification, getUserFriends, removeFriend, removeNotification} from "api/api";
import {setMyFollowers} from "store/users-slice";

const User: React.FC<UserProps> = ({user}) => {
    const {displayName, id, photoURL, followerId} = user;
    const profile = useAppSelector((state) => getUserById(state, id));
    const myProfile = useAppSelector(currentUser);
    const dispatch = useAppDispatch();

    const addFriend = (myProfileID: string, FriendId: string) => {
        addNewFriend(myProfileID, FriendId).then()
        createNotification(myProfileID, FriendId).then()
        if (myProfile) {
            getUserFriends(myProfile.id).then(response => dispatch(setMyFollowers(response)))
        }
    }

    const deleteFriend = (myProfileID: string, FriendId: string) => {
        removeFriend(myProfileID, FriendId);
        if (myProfile) {
            getUserFriends(myProfile.id).then(response => dispatch(setMyFollowers(response)))
            if (profile) {
                removeNotification(myProfileID, profile.id)
            }
        }
    }

    return (
        <div className={styles.userBlock}>
            <Link className={styles.userBlock__link} to={'/profile/' + id}>
                <div className={styles.userBlock__pic}>
                    {
                        photoURL ? (
                            <img className={styles.userBlock__image} src={photoURL} alt={displayName}/>
                        ) : (
                            <img className={styles.userBlock__image} src={emptyProfileImage} alt="No image"/>
                        )
                    }
                </div>
                <p className={styles.userBlock__name}>{displayName}</p>
            </Link>
            {myProfile && followerId && myProfile.id !== id && (
                <>
                    {user.isFriend
                        ? <button className={styles.userBlock__addToFriends}
                                             title={`Add ${displayName} to friend list`}
                                             onClick={() => deleteFriend(myProfile.id, followerId)}
                        >
                            unFollow
                        </button>
                        : <button className={styles.userBlock__addToFriends}
                                  title={`Add ${displayName} to friend list`}
                                  onClick={() => addFriend(myProfile.id, id)}
                        >
                            Follow
                        </button>
                    }
                </>
            )}
        </div>
    );
};

export default User;
