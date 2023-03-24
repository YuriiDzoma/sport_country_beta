import styles from './UserInfo.module.scss';
import emptyProfileImage from "assets/img/emptyprofile.jpg";
import React from "react";
import {UserInfoProps} from "components/Common/UserInfo/UserInfo.types";
import { Link } from 'react-router-dom';

const UserInfo = ({ id, profile }:UserInfoProps) => {
    return (
        <>
            {profile && id && (
                <div className={styles.userInfo}>
                    <Link className={styles.userInfo__link} to={'/profile/' + id}>
                        <img alt='user' className={styles.userInfo__photo}
                             src={profile.photoURL ? profile.photoURL : emptyProfileImage}>
                        </img>

                        <p className={styles.userInfo__name}>{profile.displayName}</p>
                    </Link>
                </div>
            )}
        </>
    )
}

export default UserInfo;