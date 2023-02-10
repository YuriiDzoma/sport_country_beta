import styles from './FilterExercises.module.scss';
import MuscleGroupListBeta from "components/Training/TrainingWiki/FilterExercises/MuscleGroupsList/MuscleGroup";

const FilterExercises = () => {
    return (
        <div>
            <div className={styles.title}>
                <span>Filter</span>
            </div>
            <div className={styles.muscleGroups}>
                <h3>Muscle Groups</h3>
                <MuscleGroupListBeta />
            </div>
        </div>
    )
}

export default FilterExercises;