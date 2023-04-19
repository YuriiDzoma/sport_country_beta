import ExercisesList from 'components/Training/TrainingWiki/ExercisesList/ExercisesList';

import FilterExercises from './FilterExercises/FilterExercises';
import styles from './WikiContainer.module.scss';

const WikiContainer = () => {
  return (
    <div className={styles.wikiContainer}>
      <div className={styles.wikiContainer__filter}>
        <h3 className={styles.subtitle}>Muscle Groups</h3>
        <FilterExercises />
      </div>
      <div className={styles.wikiContainer__exercises}>
        <h3 className={styles.subtitle}>Exercises list</h3>
        <ExercisesList />
      </div>
    </div>
  );
};

export default WikiContainer;
