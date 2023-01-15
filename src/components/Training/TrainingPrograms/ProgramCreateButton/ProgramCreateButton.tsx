import styles from './ProgramCreateButton.module.scss';
import {Link} from "react-router-dom";


const ProgramCreateButton = () => {
    return (
        <div className={styles.createProgram}>
            <div><span>Create new program</span></div>
            <div>
                <Link to={'/training/training_programs/create/'}>
                    <div className={styles.createProgram__link}>+</div>
                </Link>
            </div>
        </div>
    )
}

export default ProgramCreateButton;