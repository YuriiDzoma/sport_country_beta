import {useAppSelector} from "hooks/redux";
import {getExerciseByName} from "store/selectors";
import {useParams} from "react-router-dom";
import styles from './ExerciseDetail.module.scss';
import InvolvedMuscles from "./involvedMuscles";
import ExerciseDescription from "./ExerciseDescription";


const ExerciseDetail = () => {
    const {nameEn} = useParams();
    const exercise = useAppSelector((state) => getExerciseByName(state, nameEn));

    return (
        <>
            {exercise && (
                <div className={styles.exerciseDetail}>
                    <div className={styles.exerciseDetail__title}>
                        <h3>{exercise.nameEn}</h3>
                    </div>
                    <div className={styles.exerciseDetail__overview}>
                        <InvolvedMuscles secondaryGroups={exercise.secondaryGroups} />
                        <ExerciseDescription imageStart={exercise.imageStart} imageFinish={exercise.imageFinish} />
                    </div>
                </div>
            )}
        </>
    )
}

export default ExerciseDetail;