import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import {Link} from 'react-router-dom';

import { useAppSelector } from 'hooks/redux';
import { currentUser } from 'store/selectors';

import styles from './Navigation.module.scss';
import {useLocation} from "react-router";

const Navigation = () => {
  const user = useAppSelector(currentUser);
  const location = useLocation()
  let activeLocation = location.pathname.substring(1, 9);

  return (
      <>
          {user && (
              <div className={styles.navigationWrapper}>
                  <Link className={activeLocation === 'profile/'
                      ? styles.customLink__active
                      : styles.customLink} to={`profile/${user.id}`}>
                      <AccountCircleIcon/>
                      Profile
                  </Link>
                  <Link className={activeLocation === 'training'
                      ? styles.customLink__active
                      : styles.customLink} to={`training/programs/${user.id}/`}>
                      <FitnessCenterIcon/>
                      Training
                  </Link>
                  <Link className={activeLocation === 'users/'
                      ? styles.customLink__active
                      : styles.customLink} to="users/">
                      <SupervisorAccountIcon/>
                      Users
                  </Link>
              </div>
          )}
      </>
  );
};

export default Navigation;
