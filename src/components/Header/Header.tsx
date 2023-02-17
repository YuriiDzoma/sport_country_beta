import LoginIcon from '@mui/icons-material/Login';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useLocation } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';

import { signOutUser } from 'config/config';
import { useAppSelector } from 'hooks/redux';
import { currentUser } from 'store/selectors';

import styles from './Header.module.scss';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isUser = useAppSelector(currentUser);
  const activeLocation = location.pathname === '/login/';

  const loginClasses = `${styles.loginLogout} ${activeLocation ? styles.loginActive : ''}`;

  const isUserLogged = () => {
    return isUser ? (
      <button onClick={signOutUser} className={loginClasses}>
        <span className={styles.loginLogout__icon}>
          <ManageAccountsIcon />
        </span>
        <span className={styles.loginLogout__text}> Menu </span>
      </button>
    ) : (
      <Link className={loginClasses} to={`/login/`}>
        <span className={styles.loginLogout__icon}>
          <LoginIcon />
        </span>
        <span className={styles.loginLogout__text}> Login </span>
      </Link>
    );
  };

  return (
    <div className={styles.header_wrapper}>
      <div className={styles.logotype}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <h1 className={styles.logotype_goHome} onClick={() => navigate('/')}>
          SportCountry
        </h1>
      </div>
      {isUserLogged()}
    </div>
  );
};

export default Header;
