import  { Link } from "react-router-dom";
import styles from './TrainingNavbarLink.module.scss';
import {useLocation} from "react-router";

const TrainingNavbarLink = ({children, to, ...props}) => {
    let location = useLocation();
    let activeLocation = location.pathname.substring(0,23) === to.substring(0,23);

    return (
        <Link
            to={to}
            className={activeLocation ? styles.customLink_active : styles.customLink}
            {...props}
        >
            {children}
        </Link>
    )
}

export default TrainingNavbarLink;