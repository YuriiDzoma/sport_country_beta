import styles from './FilterExercises.module.scss';
import MuscleGroupListBeta from "components/Training/TrainingWiki/FilterExercises/MuscleGroupsList/MuscleGroup";

const FilterExercises = () => {
    return (
          <div className={styles.muscleGroups}>
              <MuscleGroupListBeta />
          </div>
    )
}

export default FilterExercises;