import styles from "./ExerciseDetail.module.scss";

interface secondaryGroups {
    secondaryGroups: [string];
}

const InvolvedMuscles = ({secondaryGroups}: secondaryGroups) => {
    return (
        <div className={styles.involvedMuscles}>
            {secondaryGroups.length === 1 && secondaryGroups[0] === ''
                ? <span className={styles.involvedMuscles__isolate}>this exercise is isolate</span>
                : <div>
                    <h5 className={styles.involvedMuscles__subtitle}>Secondary muscles:</h5>
                    <ul  className={styles.involvedMuscles__secondaryList}>
                        {secondaryGroups.map((muscle,index) =>
                            <li key={index} className={styles.involvedMuscles__secondaryList_item}>{muscle}</li>
                        )}
                    </ul>
                </div>
            }

            <div>
                <h5 className={styles.involvedMuscles__subtitle}>advantages of exercise:</h5>
                <ul  className={styles.involvedMuscles__secondaryList}>
                    <li className={styles.involvedMuscles__secondaryList_item}>advantage</li>
                    <li className={styles.involvedMuscles__secondaryList_item}>advantage</li>
                    <li className={styles.involvedMuscles__secondaryList_item}>advantage</li>
                </ul>
            </div>

            <div>
                <h5 className={styles.involvedMuscles__subtitle}>flaws of exercise:</h5>
                <ul  className={styles.involvedMuscles__secondaryList}>
                    <li className={styles.involvedMuscles__secondaryList_item}>flaw</li>
                    <li className={styles.involvedMuscles__secondaryList_item}>flaw</li>
                    <li className={styles.involvedMuscles__secondaryList_item}>flaw</li>
                </ul>
            </div>
        </div>
    )
}

export default InvolvedMuscles;