import styles from './UserMenu.module.scss';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import {useAppSelector} from 'hooks/redux';
import {currentUser} from 'store/selectors';
import {signOutUser} from 'config/config';
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router";

interface HeaderProps {
    showProfileMenu: () => void
}

const UserMenu = ({showProfileMenu}: HeaderProps) => {
  const isUser = useAppSelector(currentUser);
  const navigate = useNavigate();

  const logout = () => {
      signOutUser().then(() => navigate('/'));
      showProfileMenu();
  }

  const isUserLogged = () => {
    if (isUser) {
      return (
        <div className={styles.userMenu__inner}>
          <Link to={'/settings/'} className={styles.userMenu__button} onClick={showProfileMenu}>
            <ManageAccountsIcon className={styles.userMenu__buttonIcon} />
            <span className={styles.userMenu__buttonText}>Settings</span>
          </Link>
          <button className={styles.userMenu__button} onClick={logout}>
            <ExitToAppIcon className={styles.userMenu__buttonIcon} />
            <span className={styles.userMenu__buttonText}>Logout</span>
          </button>
        </div>
      )
    }

    return (
      <div className={styles.userMenu__inner}>
        <Link to={`/login/`} className={styles.userMenu__button} onClick={showProfileMenu}>
          <ExitToAppIcon className={styles.userMenu__buttonIcon} />
          <span className={styles.userMenu__buttonText}>Login</span>
        </Link>
      </div>
    )
  }


  return(
      <div className={styles.userMenu}>
        {
          isUserLogged()
        }
      </div>
  )
}

export default UserMenu;