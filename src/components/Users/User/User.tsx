import styles from './User.module.scss';
import React from "react";
import {UserProps} from "components/Users/User/User.types";
import emptyProfileImage from 'assets/img/emptyprofile.jpg'
import {Link} from "react-router-dom";

const User:React.FC<UserProps> = ({ user }) => {
  const {name, userPhoto, id} = user;

  return(
    <Link className={styles.userBlock} to={'/profile/' + id}>
        <img className={styles.userBlock__image} src={ userPhoto === '' ? emptyProfileImage : userPhoto } alt="" />
        <p className={styles.userBlock__name}>{ name }</p>
    </Link>
  )
}

export default User;