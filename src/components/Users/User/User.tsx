import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import emptyProfileImage from 'assets/img/emptyprofile.jpg';
import { UserProps } from 'components/Users/User/User.types';

import styles from './User.module.scss';

const User: React.FC<UserProps> = ({ user }) => {
  const { displayName, id, photoURL } = user;

  return (
    <Link className={styles.userBlock} to={'/profile/' + id}>
      <div className={styles.userBlock__pic}>
        {
          photoURL ? (
              <img className={styles.userBlock__image} src={photoURL} alt="" />
          ) : (
              <AccountCircleIcon className={styles.userBlock__image} />
          )
        }
      </div>
      <p className={styles.userBlock__name}>{displayName}</p>
    </Link>
  );
};

export default User;
