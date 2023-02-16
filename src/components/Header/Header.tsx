import styles from './Header.module.scss'
import {Link, useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router';
import {useAppSelector} from "hooks/redux";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import {currentUser} from '../../store/selectors';
import {signOutUser} from '../../config/config';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isUser = useAppSelector(currentUser);
    const activeLocation = location.pathname === '/login/';

    const loginClasses = `${styles.loginLogout} ${activeLocation ? styles.loginActive : ''}`;

    const isUserLogged = () => {
      return(
          isUser
              ? <span  onClick={signOutUser} className={loginClasses}>LOGOUT</span>
              : (
                  <Link className={loginClasses} to={`/login/`}>
                    <span className={styles.loginLogout__icon}>
                      <ManageAccountsIcon  />
                    </span>
                    <span className={styles.loginLogout__text}> Login </span>
                  </Link>
              )
      )
    }

    return (
        <div className={styles.header_wrapper}>
            <div className={styles.logotype}>
                <h1 className={styles.logotype_goHome} onClick={() => navigate('/')}>SportCountry</h1>
            </div>
            { isUserLogged() }
        </div>
    )
}


export default Header;