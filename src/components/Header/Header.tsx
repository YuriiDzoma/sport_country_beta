import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link, useNavigate} from 'react-router-dom';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import styles from './Header.module.scss';
import UserMenu from './UserMenu/UserMenu';
import React, {useState, MouseEvent} from 'react';
import {useAppSelector} from "hooks/redux";
import {getNotifications} from "store/selectors";

const Header = () => {
  const navigate = useNavigate();
  const [isProfileMenuActive, setIsProfileMenuActive] = useState(false);
  const notifications = useAppSelector(getNotifications);

  const showProfileMenu = (event: MouseEvent<HTMLElement>) => {
    setIsProfileMenuActive(!isProfileMenuActive);
  }

  return (
    <div className={styles.header_wrapper}>
      <div className={styles.logotype}>
        <h1 className={styles.logotype_goHome} onClick={() => navigate('/')}>
          SportCountry
        </h1>
        {notifications && notifications.length >= 1 && (
            <Link to={'/notifications/'} className={styles.notifications}>
              <NotificationsNoneIcon color={"primary"} />
              <span className={styles.notifications__count}>{notifications.length}</span>
            </Link>
        )}
      </div>
      <div className={`${styles.profile} ${isProfileMenuActive ? styles.profile__active : ''}`}>
        <button className={styles.profile__button} onClick={showProfileMenu}>
          <span className={styles.profile__text}>Profile</span>
          <AccountCircleIcon className={styles.profile__icon} />
        </button>
        <div className={styles.profile__menu}>
          <UserMenu />
        </div>
        <button className={styles.profile__close} onClick={showProfileMenu}></button>
      </div>
    </div>
  );
};

export default Header;
