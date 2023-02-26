import styles from './CreateGlobalProgram.module.scss';
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import React from "react";
import {useNavigate} from "react-router";


const CreateGlobalProgram = () => {
    const navigate = useNavigate();

    return (
          <div className={styles.createProgram}>
              <button  onClick={()=> navigate('/training/training_programs/global_create/')}
                       className={styles.createProgram__link}>
                  <LibraryAddIcon />
                  <span>add new program</span>
              </button>
          </div>
    )
}

export default CreateGlobalProgram;