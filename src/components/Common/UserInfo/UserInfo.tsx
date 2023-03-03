import styles from './UserInfo.module.scss';
import emptyProfileImage from "assets/img/emptyprofile.jpg";
import React from "react";
import {UserInfoProps} from "components/Common/UserInfo/UserInfo.types";
import { Link } from 'react-router-dom';

const UserInfo: React.FC<UserInfoProps> = ({ id, profile }) => {
    return (
        <>
            {profile && id && (
                <div className={styles.userInfo}>
                    <Link className={styles.userBlock__link} to={'/profile/' + id}>
                        <img alt='user' className={styles.userInfo__photo}
                             src={profile.photoURL ? profile.photoURL : emptyProfileImage}>

                        </img>
                    </Link>
                    <p className={styles.userInfo__name}>{profile.displayName}</p>
                </div>
            )}
        </>
    )
}

export default UserInfo;