import styles from "components/Profile/Profile.module.scss";
import SendIcon from '@mui/icons-material/Send';

const Publications = () => {
    return (
        <div className={styles.publications}>
            <h3>Publications</h3>
            <div className={styles.publications__field}><textarea /></div>
            <div className={styles.publications__buttons}>
                <button className={styles.send}><SendIcon color={'primary'} /></button>
            </div>
        </div>
    )
}

export default Publications;