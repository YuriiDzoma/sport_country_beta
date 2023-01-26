import styles from './WikiContainer.module.scss';
import FilterExercises from "./FilterExercises/FilterExercises";
import Exercises from "components/Training/TrainingWiki/Exercises/Exercises";
import {useAppDispatch} from "hooks/redux";
import {useEffect} from "react";
import {fetchExercisesGroups} from "api/api";

const WikiContainer = () => {
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchExercisesGroups());
    }, [])

    return (
        <div className={styles.wikiContainer}>
            <div className={styles.wikiContainer__filter}>
                <FilterExercises />
            </div>
            <div className={styles.wikiContainer__exercises}>
                <Exercises />
            </div>
        </div>
    )
}

export default WikiContainer;