import styles from './Training.module.scss'
import {Route, Routes} from "react-router-dom";
import TrainingProcess from "./TrainingProcess/Training";
import TrainingProgramsContainer from "./TrainingPrograms/TrainingProgramsContainer";
import TrainingWikiNavbarContainer from "./TrainingWiki/TrainingWikiNavbarContainer";
import ListOfExercisesContainer from "./TrainingWiki/ListOfExercises/ListOfExercisesContainer";
import TrainingNavbar from "./TrainingNavbar/TrainingNavbar";

const Training = () => {
    const trainingNavigation =  [
        {id:1, tittle: 'Training Process', url: '/training/training_process/'},
        {id:2, tittle: 'Training Programs', url: '/training/training_programs/'},
        {id:3, tittle: 'Training Wiki', url: '/training/training_wiki_navbar/'},
    ];

    return (
        <div className={styles.trainingWrapper}>
            <div className={styles.linksContainer}>
                <TrainingNavbar trainingNavigation={trainingNavigation}/>
            </div>
            <div className={styles.trainingContent}>

                <Routes>
                    <Route path={'training_process/'} element={<TrainingProcess/>} />
                    <Route path={'training_programs/*'} element={<TrainingProgramsContainer />} />
                    <Route path={'training_wiki_navbar/*'} element={<TrainingWikiNavbarContainer />} />

                    <Route path={`training_wiki_shoulder_muscles/*`} element={<ListOfExercisesContainer
                        type={'Shoulder Muscles'} />} />
                    <Route path={`training_wiki_triceps_muscles/*`} element={<ListOfExercisesContainer
                        type={'Triceps Muscles'} />} />
                    <Route path={`training_wiki_dorsal_muscles/*`} element={<ListOfExercisesContainer
                        type={'Dorsal Muscles'} />} />
                    <Route path={`training_wiki_pectoral_muscles/*`} element={<ListOfExercisesContainer
                        type={'Pectoral Muscles'} />} />
                    <Route path={`training_wiki_biceps_muscles/*`} element={<ListOfExercisesContainer
                        type={'Biceps Muscles'} />} />
                    <Route path={`training_wiki_abdominal_muscles/*`} element={<ListOfExercisesContainer
                        type={'Abdominal Muscles'} />} />
                    <Route path={`training_wiki_leg_muscles/*`} element={<ListOfExercisesContainer
                        type={'Leg Muscles'} />} />
                </Routes>

            </div>
        </div>
    )
}


export default Training;