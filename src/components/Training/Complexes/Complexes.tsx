import styles from './Complexes.module.scss'
import Filters from "./Filters/Filters";
import ComplexesList from "./Complexes/ComplexesList";
import React, {useState} from "react";
import {Program} from "store/training-slice.types";
import FindSort from "./FindSort/FindSort";
import {ComplexesProps} from "./Complexes.types";
import CreateGlobalProgram from "components/Training/Complexes/CreateGlobalProgram/CreateGlobalProgram";
import {useAppSelector} from "hooks/redux";
import {currentUser} from "store/selectors";

const Complexes: React.FC<ComplexesProps> = ({allPrograms}) => {
    const user = useAppSelector(currentUser);
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
      <div>
          <FindSort />
          <div className={styles.programsContainer}>
              <div>
                  <Filters filteringPrograms={filteringPrograms} />
              </div>
              <div>
                  {user && user.isTrainer && (
                      <CreateGlobalProgram />
                  )}
                  <ComplexesList programs={programs} />
              </div>
          </div>
      </div>
  );
};

export default Complexes;
