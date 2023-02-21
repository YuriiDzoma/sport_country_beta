import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';
import UserMenu from '../UserMenu/UserMenu';
import React, {useState, MouseEvent} from 'react';

const Header = () => {
  const navigate = useNavigate();

  const [isProfileMenuActive, setIsProfileMenuActive] = useState(false);


  const showProfileMenu = (event: MouseEvent<HTMLElement>) => {
    setIsProfileMenuActive(!isProfileMenuActive);
  }

  return (
    <div className={styles.header_wrapper}>
      <div className={styles.logotype}>
        <h1 className={styles.logotype_goHome} onClick={() => navigate('/')}>
          SportCountry
        </h1>
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
