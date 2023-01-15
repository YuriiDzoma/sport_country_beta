import styles from './Header.module.scss'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const Header = () => {
    const location = useLocation()
    const activeLocation = location.pathname === '/login/'

    return (
        <div className={styles.header_wrapper}>
            <div><span>SportCountry</span></div>
            <div>
                <Link to={`/login/`}>
                    <span className={ activeLocation ? styles.loginActive : '' }>Login</span>
                </Link>
            </div>
        </div>
    )
}


export default Header;