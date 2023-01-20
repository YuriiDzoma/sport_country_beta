import TrainingWikiNavbar from "./TrainingWikiNavbar/TrainingWikiNavbar";
import styles from './TrainingWikiNavbar/TrainingWiki.module.scss'
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {useEffect} from "react";
import {fetchExercises, fetchPrograms} from "store/ActionCreators";
import {getExercises} from "store/selectors";


const TrainingWikiNavbarContainer = () => {

    const backgroundImg = require('../../../assets/img/body.jpg');

    const myStyle= {
        background: `url(${backgroundImg})`,
        minHeight: '400px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 90%',
        backgroundPosition: '50% 50%'
    };

    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchExercises())
    }, [])

    const exercises = useAppSelector(getExercises);
    console.log(exercises);

    return (
        <div className={styles.wikiContainer}>
            <div style={myStyle}>
                <TrainingWikiNavbar />
            </div>
        </div>

    )
}

export default TrainingWikiNavbarContainer;