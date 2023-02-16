import styles from './User.module.scss';
import React from "react";
import {UserProps} from "components/Users/User/User.types";
import emptyProfileImage from 'assets/img/emptyprofile.jpg'

const User:React.FC<UserProps> = ({ user }) => {
  const {name, userPhoto, id} = user;

  return(
      <a href={id} className={styles.userBlock}>
        <img className={styles.userBlock__image} src={ userPhoto === '' ? emptyProfileImage : userPhoto } alt="" />
        <p className={styles.userBlock__name}>{ name }</p>
      </a>
  )
}

export default User;