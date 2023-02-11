import styles from './ProgramCreateButton.module.scss';
import {Link} from "react-router-dom";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';


const ProgramCreateButton = () => {
    return (
        <div className={styles.createProgram}>

          <Link className={styles.createProgram__link} to={'/training/training_programs/create/'}>
            <LibraryAddIcon />
            <span>add new program</span>
          </Link>
        </div>
    )
}

export default ProgramCreateButton;