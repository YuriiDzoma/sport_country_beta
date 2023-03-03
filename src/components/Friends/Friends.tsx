import {useParams} from "react-router";
import {useAppSelector} from "hooks/redux";
import {getUserById} from "store/selectors";
import styles from './Friends.module.scss'
import React from "react";
import UserInfo from "components/Common/UserInfo/UserInfo";

const Friends = () => {
    const {id} = useParams();
    const profile = useAppSelector((state) => getUserById(state, id));
    return (
        <div className={styles.friendWrapper}>
            <UserInfo id={id} profile={profile} />
        </div>
    )
}

export default Friends;