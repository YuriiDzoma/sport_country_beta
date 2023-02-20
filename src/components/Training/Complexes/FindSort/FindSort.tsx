import styles from "./FindSort.module.scss";
import SearchIcon from '@mui/icons-material/Search';

const FindSort = () => {
    return (
        <div className={styles.findSort}>
            <div className={styles.find}>
                <input className={styles.find_field} />
                <SearchIcon color={'primary'} />
            </div>
            <div className={styles.sorting}>
                <span>Sorting</span>
                <select className={styles.sorting_change}>
                    <option>Name</option>
                    <option>Type</option>
                    <option>Level</option>
                </select>
            </div>
        </div>
    )
}

export default FindSort;