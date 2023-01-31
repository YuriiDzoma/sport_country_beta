import styles from './FilterExercises.module.scss';
import MuscleGroupsList from './MuscleGroupsList/MuscleGroupsList';

const FilterExercises = () => {
    return (
        <div>
            <div className={styles.title}>
                <span>Filter</span>
            </div>
            <div className={styles.muscleGroups}>
                <h3>Muscle Groups</h3>
                <MuscleGroupsList />
            </div>
        </div>
    )
}

export default FilterExercises;