import styles from './Navigation.module.scss'
import { NavbarLink } from './NavbarLink/NavbarLink'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import {Link} from "react-router-dom";
import {useAppSelector} from "hooks/redux";
import {currentUser} from "store/selectors";


const Navigation = () => {
    const profileId = useAppSelector(currentUser);
    if (profileId) {

    }
    // const navigation = {
    //     navbar: [
    //         {id: 1, title: 'Profile', url: 'profile/', logotype: <AccountCircleIcon />},
    //         {id: 2, title: 'Training', url: 'training/', logotype: <FitnessCenterIcon />},
    //         {id: 3, title: 'Users', url: 'users/', logotype: <SupervisorAccountIcon />},
    //     ]
    // }

    return (
        <div className={styles.navigationWrapper}>
            <Link className={styles.customLink} to={'profile/'+profileId}><AccountCircleIcon />Profile</Link>
            <Link className={styles.customLink} to='training/'><FitnessCenterIcon />Training</Link>
            <Link className={styles.customLink} to='users/'><SupervisorAccountIcon />Users</Link>
        </div>
    // <div className={styles.navigationWrapper}>
    //     {navigation.navbar.map((item)=> (
    //         <NavbarLink to={item.url} key={item.id}>
    //             { item.logotype }
    //             <span>{item.title}</span>
    //         </NavbarLink>
    //     ))}
    // </div>
    )
}

export default Navigation;