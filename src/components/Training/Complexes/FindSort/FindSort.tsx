import styles from "./FindSort.module.scss";
import SearchIcon from '@mui/icons-material/Search';
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import React from "react";
import {useNavigate} from "react-router";

const FindSort = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.findSort}>
            <div className={styles.createProgram}>
                <button onClick={()=> navigate('/training/training_programs/global_create/')}
                        className={styles.createProgram__link}>
                    <LibraryAddIcon />
                    <span>add new program</span>
                </button>
            </div>
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