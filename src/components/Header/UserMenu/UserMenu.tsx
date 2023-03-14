import styles from './UserMenu.module.scss';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import {useAppSelector} from 'hooks/redux';
import {currentUser} from 'store/selectors';
import {signOutUser} from 'config/config';
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router";

const UserMenu = () => {
  const isUser = useAppSelector(currentUser);
  const navigate = useNavigate();

  const logout = () => {
      signOutUser().then(() => navigate('/'))
  }

  const isUserLogged = () => {
    if (isUser) {
      return (
        <div className={styles.userMenu__inner}>
          <button className={styles.userMenu__button}>
            <ManageAccountsIcon className={styles.userMenu__buttonIcon} />
            <span className={styles.userMenu__buttonText}>Settings</span>
          </button>
          <button className={styles.userMenu__button} onClick={logout}>
            <ExitToAppIcon className={styles.userMenu__buttonIcon} />
            <span className={styles.userMenu__buttonText}>Logout</span>
          </button>
        </div>
      )
    }

    return (
      <div className={styles.userMenu__inner}>
        <Link to={`/login/`} className={styles.userMenu__button}>
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