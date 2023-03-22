import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link, useNavigate} from 'react-router-dom';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import styles from './Header.module.scss';
import UserMenu from './UserMenu/UserMenu';
import React, {useState} from 'react';
import {useAppSelector} from "hooks/redux";
import {currentUser, getNotifications} from "store/selectors";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";



const Header = () => {
  const navigate = useNavigate();
  const isUser = useAppSelector(currentUser);
  const [isProfileMenuActive, setIsProfileMenuActive] = useState(false);
  const notifications = useAppSelector(getNotifications);

  const showProfileMenu = () => {
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
        {isUser !== undefined && (
            <>
                {isUser ?
                    <>
                        <button className={styles.profile__button} onClick={showProfileMenu}>
                            <span className={styles.profile__text}>
                                {isUser ? 'Menu' : 'Login'}
                            </span>
                            <AccountCircleIcon className={styles.profile__icon}/>
                        </button>
                        <div className={styles.profile__menu}>
                            <UserMenu showProfileMenu={showProfileMenu} />
                        </div>
                        <button className={styles.profile__close} onClick={showProfileMenu}></button>
                    </> :
                    <Link to={`/login/`} className={styles.login} >
                        <ExitToAppIcon className={styles.login__buttonIcon} />
                        <span className={styles.login__buttonText}>Login</span>
                    </Link>
                }
            </>
        )}
      </div>
    </div>
  );
};

export default Header;
