import styles from './Training.module.scss'
import {Route, Routes} from "react-router-dom";
import TrainingProcess from './TrainingProcess/TrainingProcess';
import TrainingPrograms from "./TrainingPrograms/TrainingPrograms";
import TrainingWikiNavbarContainer from "./TrainingWiki/TrainingWikiNavbarContainer";
import TrainingNavbar from "./TrainingNavbar/TrainingNavbar";
import ListOfExercises from './TrainingWiki/ListOfExercises/ListOfExercises'


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
            <div className={styles.trainingContentWrapper}>
              <div className={styles.trainingContent}>

                <Routes>
                    <Route path={'training_process/'} element={<TrainingProcess/>} />
                    <Route path={'training_programs/*'} element={<TrainingPrograms />} />
                    <Route path={'training_wiki_navbar/*'} element={<TrainingWikiNavbarContainer />} />

                    {/*<Route path={`training_wiki_shoulder_muscles/*`} element={<ListOfExercises*/}
                    {/*    type={'Shoulder Muscles'} />} />*/}
                    {/*<Route path={`training_wiki_triceps_muscles/*`} element={<ListOfExercises*/}
                    {/*    type={'Triceps Muscles'} />} />*/}
                    {/*<Route path={`training_wiki_dorsal_muscles/*`} element={<ListOfExercises*/}
                    {/*    type={'Dorsal Muscles'} />} />*/}
                    {/*<Route path={`training_wiki_pectoral_muscles/*`} element={<ListOfExercises*/}
                    {/*    type={'Pectoral Muscles'} />} />*/}
                    {/*<Route path={`training_wiki_biceps_muscles/*`} element={<ListOfExercises*/}
                    {/*    type={'Biceps Muscles'} />} />*/}
                    {/*<Route path={`training_wiki_abdominal_muscles/*`} element={<ListOfExercises*/}
                    {/*    type={'Abdominal Muscles'} />} />*/}
                    {/*<Route path={`training_wiki_leg_muscles/*`} element={<ListOfExercises*/}
                    {/*    type={'Leg Muscles'} />} />*/}
                </Routes>

            </div>
            </div>
        </div>
    )
}


export default Training;