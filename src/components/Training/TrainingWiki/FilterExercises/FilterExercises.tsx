import styles from './FilterExercises.module.scss';
import MuscleGroupsList from "./MuscleGroupsList/MuscleGroupsList";

const FilterExercises = () => {
    return (
          <div className={styles.muscleGroups}>
              <MuscleGroupsList />
          </div>
    )
}

export default FilterExercises;