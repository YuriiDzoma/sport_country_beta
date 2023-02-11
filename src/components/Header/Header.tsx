import styles from './Header.module.scss'
import {Link, useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const activeLocation = location.pathname === '/login/';

    const loginClasses = `${styles.loginLogout} ${activeLocation ? styles.loginActive : ''}`;

    return (
        <div className={styles.header_wrapper}>
            <div className={styles.logotype}>
                <h1 className={styles.logotype_goHome} onClick={() => navigate('/')}>SportCountry</h1>
            </div>
            <div>
                <Link className={loginClasses} to={`/login/`}>
                    <span className={styles.loginLogout__text}> Login </span>
                    <ManageAccountsIcon className={styles.loginLogout__icon} />
                </Link>
            </div>
        </div>
    )
}


export default Header;