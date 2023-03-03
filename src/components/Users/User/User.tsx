import React from 'react';
import { Link } from 'react-router-dom';

import emptyProfileImage from 'assets/img/emptyprofile.jpg';
import { UserProps } from 'components/Users/User/User.types';

import styles from './User.module.scss';
import {useAppSelector} from "hooks/redux";
import {currentUser} from "store/selectors";
import {addNewFriend} from "api/api";

const User: React.FC<UserProps> = ({ user }) => {
  const { displayName, id, photoURL } = user;
  const myProfile = useAppSelector(currentUser);

  const addFriend = (FriendId: string, myProfileID: string) => {
      addNewFriend(myProfileID, FriendId).then(response => console.log(response))
  }

  return (
      <div className={styles.userBlock}>
        <Link className={styles.userBlock__link} to={'/profile/' + id}>
          <div className={styles.userBlock__pic}>
            {
              photoURL ? (
                  <img className={styles.userBlock__image} src={photoURL} alt={displayName} />
              ) : (
                  <img className={styles.userBlock__image} src={emptyProfileImage} alt="No image" />
              )
            }
          </div>
          <p className={styles.userBlock__name}>{displayName}</p>
        </Link>
          {myProfile && myProfile.id !== id && (
              <button className={styles.userBlock__addToFriends}
                      title={`Add ${displayName} to friend list`}
                      onClick={() => addFriend(id, myProfile.id)}
              >
                  Follow
              </button>
          )}
      </div>
  );
};

export default User;
