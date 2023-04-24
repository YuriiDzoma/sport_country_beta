import styles from "./FindSort.module.scss";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";

interface FindSortProps {
    changeSort: (value: string) => void
}

const FindSort = ({changeSort}: FindSortProps) => {

    const handleChange = (value: string) => {
        value === 'Name' ? changeSort('title') : changeSort(value.toLowerCase())
    }

    return (
        <div className={styles.findSort}>
            <div className={styles.find}>
                <input className={styles.find_field} />
                <SearchIcon color={'primary'} />
            </div>
            <div className={styles.sorting}>
                <span>Sorting</span>
                <select onChange={(e) => handleChange(e.target.value)} className={styles.sorting_change}>
                    <option>Name</option>
                    <option>Author</option>
                    <option>Level</option>
                    <option>Days</option>
                </select>
            </div>
        </div>
    )
}

export default FindSort;