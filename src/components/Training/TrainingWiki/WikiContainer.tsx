import styles from './WikiContainer.module.scss';
import FilterExercises from "./FilterExercises/FilterExercises";
import ExercisesList from "components/Training/TrainingWiki/ExercisesList/ExercisesList";

const WikiContainer = () => {

    return (
        <div className={styles.wikiContainer}>
            <div className={styles.wikiContainer__filter}>
                <h3>Muscle Groups</h3>
                <FilterExercises />
            </div>
            <div className={styles.wikiContainer__exercises}>
                <h3>Exercises list</h3>
                <ExercisesList />
            </div>
        </div>
    )
}

export default WikiContainer;