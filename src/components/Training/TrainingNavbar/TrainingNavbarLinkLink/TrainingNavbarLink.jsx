import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import styles from './TrainingNavbarLink.module.scss';

const TrainingNavbarLink = ({ children, to, ...props }) => {
  let location = useLocation();
  let activeLocation = location.pathname.substring(0, 23) === to.substring(0, 23);

  return (
    <Link to={to} className={`${styles.customLink} ${activeLocation ? styles.customLinkActive : ''}`} {...props}>
      {children}
    </Link>
  );
};

export default TrainingNavbarLink;
