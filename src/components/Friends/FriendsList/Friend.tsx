import {useAppDispatch, useAppSelector} from "hooks/redux";
import {currentUser, getUserById} from "store/selectors";
import styles from './Friend.module.scss'
import emptyProfileImage from "assets/img/emptyprofile.jpg";
import React from "react";
import {getUserFriends, removeFriend} from "api/api";
import {deleteFollower, setMyFollowers} from "store/users-slice";

interface FriendProps {
    friendId: string
}

const Friend = ({friendId}: FriendProps) => {
    const profile = useAppSelector((state) => getUserById(state, friendId));
    const myProfile = useAppSelector(currentUser);
    const dispatch = useAppDispatch();

    const deleteFriend = (myProfileID: string, FriendId: string) => {
        removeFriend(myProfileID, FriendId).then(() => dispatch(deleteFollower(FriendId)));
        if (profile) {
        }
    }
    return (
        <div className={styles.friend}>
            {profile && myProfile && profile && (
                <div className={styles.friend__outer}>
                    <div className={styles.friend__inner}>
                        {profile.photoURL ? (
                                <img className={styles.friend__avatar} src={profile.photoURL} alt={profile.displayName}/>
                            ) : (
                                <img className={styles.friend__avatar} src={emptyProfileImage} alt="No image"/>
                            )
                        }
                        <p className={styles.friend__name}>{profile.displayName}</p>
                    </div>
                    <button className={styles.friend__unFollowFriends}
                            title={`Add ${profile.displayName} to friend list`}
                            onClick={() => {
                                if (profile.followerId) {
                                    deleteFriend(myProfile.id, profile.followerId)
                                }
                            }}
                    >
                        unFollow
                    </button>
                </div>
            )}
        </div>
    )
}

export default Friend;