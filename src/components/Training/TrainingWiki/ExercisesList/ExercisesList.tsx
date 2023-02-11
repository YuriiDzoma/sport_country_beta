import {useAppSelector} from "hooks/redux";
import {getExercises} from "store/selectors";
import {useEffect} from "react";
import styles from './ExercisesList.module.scss'
import Exercise from "components/Training/TrainingWiki/ExercisesList/Exercise/Exercise";

const ExercisesList = () => {
    const exercises = useAppSelector(getExercises)
    useEffect(()=> {
    },[exercises])
    return (
        <div className={styles.exercisesListWrapper}>
            {exercises.map((exercise, index) => <Exercise key={index} exercise={exercise}/>)}
        </div>
    )
}

export default ExercisesList;