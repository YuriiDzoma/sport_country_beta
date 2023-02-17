import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import styles from './../Navigation.module.scss';

const NavbarLink = ({ children, to }) => {
  let location = useLocation();
  let activeLocation = location.pathname.substring(1, 6) === to.substring(0, 5);
  return (
    <Link to={to} className={activeLocation ? `${styles.customLink} ${styles.customLink_active}` : styles.customLink}>
      {children}
    </Link>
  );
};

export { NavbarLink };
