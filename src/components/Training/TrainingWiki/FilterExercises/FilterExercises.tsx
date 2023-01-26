import styles from './FilterExercises.module.scss';
import MuscleGroupsList from './MuscleGroupsList/MuscleGroupsList';

const FilterExercises = () => {
    return (
        <div>
            <div className={styles.title}>
                <span>Filter</span>
            </div>
            <div className={styles.muscleGroups}>
                <span>Muscle Groups</span>
                <MuscleGroupsList />
            </div>
        </div>
    )
}

export default FilterExercises;