import React from 'react';
import { Link } from 'react-router-dom';

import emptyProfileImage from 'assets/img/emptyprofile.jpg';
import { UserProps } from 'components/Users/User/User.types';

import styles from './User.module.scss';

const User: React.FC<UserProps> = ({ user }) => {
  const { displayName, id, photoURL } = user;

  return (
    <Link className={styles.userBlock} to={'/profile/' + id}>
      <img className={styles.userBlock__image} src={photoURL === '' ? emptyProfileImage : photoURL} alt="" />
      <p className={styles.userBlock__name}>{displayName}</p>
    </Link>
  );
};

export default User;
