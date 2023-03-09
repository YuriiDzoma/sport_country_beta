import {useAppDispatch, useAppSelector} from "hooks/redux";
import {currentUser, getUserById} from "store/selectors";
import styles from './Friend.module.scss'
import emptyProfileImage from "assets/img/emptyprofile.jpg";
import React from "react";
import {addNewFriend, getUserFriends, removeFriend} from "api/api";
import {deleteFollower, setMyFollowers} from "store/users-slice";
import {useParams} from "react-router";

interface FriendProps {
    friendId: string
}

const Friend = ({friendId}: FriendProps) => {
    const {id} = useParams();
    const profile = useAppSelector((state) => getUserById(state, friendId));
    const myProfile = useAppSelector(currentUser);
    const dispatch = useAppDispatch();
    let isMyFriends = false
    if (myProfile && id) {
        isMyFriends = myProfile.id === id
    }

    const deleteFriend = (myProfileID: string, FriendId: string) => {
        removeFriend(myProfileID, FriendId).then(() => dispatch(deleteFollower(FriendId)));
        if (profile) {
        }
    }

    const addFriend = (myProfileID: string, FriendId: string) => {
        addNewFriend(myProfileID, FriendId).then(response => console.log(response))
        if (myProfile) {
            getUserFriends(myProfile.id).then(response => dispatch(setMyFollowers(response)))
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
                    {isMyFriends
                        ? <button className={styles.friend__changedFriends}
                                  title={`Add ${profile.displayName} to friend list`}
                                  onClick={() => {
                                      if (profile.followerId) {
                                          deleteFriend(myProfile.id, profile.followerId)
                                      }
                                  }}
                        >
                            unFollow
                        </button>
                        : <>
                            {profile.isFriend || profile.id === myProfile.id
                                ? null
                                : <button className={styles.friend__changedFriends}
                                          title={`Add ${profile.displayName} to friend list`}
                                          onClick={() => addFriend(myProfile.id, profile.id )}
                                >
                                    Follow
                                </button>
                            }
                        </>  }

                </div>
            )}
        </div>
    )
}

export default Friend;