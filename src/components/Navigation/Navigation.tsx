import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Link } from 'react-router-dom';

import { useAppSelector } from 'hooks/redux';
import { currentUser } from 'store/selectors';

import styles from './Navigation.module.scss';

const Navigation = () => {
  const user = useAppSelector(currentUser);

  return (
      <>
        {
          user && (
                <div className={styles.navigationWrapper}>
                  <Link className={styles.customLink} to={`profile/${user.uid}`}>
                    <AccountCircleIcon />
                    Profile
                  </Link>
                  <Link className={styles.customLink} to="training/">
                    <FitnessCenterIcon />
                    Training
                  </Link>
                  <Link className={styles.customLink} to="users/">
                    <SupervisorAccountIcon />
                    Users
                  </Link>
                </div>
            )
        }

      </>
  );
};

export default Navigation;
