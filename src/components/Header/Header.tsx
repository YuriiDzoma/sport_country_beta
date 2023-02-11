import styles from './Header.module.scss'
import {Link, useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router';
import {useEffect, useState} from "react";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const activeLocation = location.pathname === '/login/'
    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (
        <div className={styles.header_wrapper}>
            <div className={styles.logotype}>
                <span className={styles.logotype_goHome} onClick={() => navigate('/')}>SportCountry</span>
            </div>
            <div>
                <Link to={`/login/`}>
                    {isMobile
                        ? <ManageAccountsIcon fontSize={"large"}  color="primary" />
                        : <span className={ activeLocation ? styles.loginActive : '' }>Login</span> }
                </Link>
            </div>
        </div>
    )
}


export default Header;