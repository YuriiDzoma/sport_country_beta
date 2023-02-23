import React from 'react';
import { Link } from 'react-router-dom';

import emptyProfileImage from 'assets/img/emptyprofile.jpg';
import { UserProps } from 'components/Users/User/User.types';

import styles from './User.module.scss';

const User: React.FC<UserProps> = ({ user }) => {
  const { displayName, id, photoURL } = user;

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
        <button className={styles.userBlock__addToFriends} title={`Add ${displayName} to friend list`}>Add friend</button>
      </div>
  );
};

export default User;
