import styles from './Navigation.module.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import {Link} from "react-router-dom";
import {useAppSelector} from "hooks/redux";
import {currentUser} from "store/selectors";


const Navigation = () => {
    const profileId = useAppSelector(currentUser);

    return (
        <div className={styles.navigationWrapper}>
            <Link className={styles.customLink} to={'profile/'+profileId}><AccountCircleIcon />Profile</Link>
            <Link className={styles.customLink} to='training/'><FitnessCenterIcon />Training</Link>
            <Link className={styles.customLink} to='users/'><SupervisorAccountIcon />Users</Link>
        </div>
    )
}

export default Navigation;