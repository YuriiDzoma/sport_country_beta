import styles from './Complexes.module.scss'
import Filters from "./Filters/Filters";
import ComplexesList from "./Complexes/ComplexesList";
import React, {useState} from "react";
import {Program} from "store/training-slice.types";
import FindSort from "./FindSort/FindSort";
import {ComplexesProps} from "./Complexes.types";

const Complexes: React.FC<ComplexesProps> = ({allPrograms}) => {

    const [programs, setPrograms] = useState<Program[] | undefined>([...allPrograms]);
    const filteringPrograms = (name: string, checked: boolean) => {
        let filteredPrograms;
        !checked
            ? filteredPrograms = programs ? programs.filter((program) => program.typeOf !== name) : undefined
            : filteredPrograms = programs
                ? [...programs, ...allPrograms.filter((program) => program.typeOf === name)]
                : allPrograms.filter((program) => program.typeOf === name)
        setPrograms(filteredPrograms)
    }

  return(
      <div className={styles.complexesWrapper}>
          <FindSort />
          <div className={styles.programsContainer}>
              <div className={styles.filters}>
                  <Filters filteringPrograms={filteringPrograms} />
              </div>
              <div className={styles.complexes}>
                  <ComplexesList programs={programs} />
              </div>
          </div>
      </div>
  );
};

export default Complexes;
