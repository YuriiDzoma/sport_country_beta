import TrainingWikiNavbar from "./TrainingWikiNavbar/TrainingWikiNavbar";
import styles from './TrainingWikiNavbar/TrainingWiki.module.scss'


const TrainingWikiNavbarContainer = () => {

    const backgroundImg = require('../../../assets/img/body.jpg');

    const myStyle= {
        background: `url(${backgroundImg})`,
        minHeight: '400px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 90%',
        backgroundPosition: '50% 50%'
    };

    const trainingWikiNavbar = [
        {id: 1, title: 'Shoulder Muscles', url: '/training/training_wiki_shoulder_muscles/'},
        {id: 2, title: 'Triceps Muscles', url: '/training/training_wiki_triceps_muscles/'},
        {id: 3, title: 'Dorsal Muscles', url: '/training/training_wiki_dorsal_muscles/'},
        {id: 4, title: 'Pectoral Muscles', url: '/training/training_wiki_pectoral_muscles/'},
        {id: 5, title: 'Biceps Muscles', url: '/training/training_wiki_biceps_muscles/'},
        {id: 6, title: 'Abdominal Muscles', url: '/training/training_wiki_abdominal_muscles/'},
        {id: 7, title: 'Leg Muscles', url: '/training/training_wiki_leg_muscles/'},
    ]

    return (
        <div className={styles.wikiContainer}>
            <div style={myStyle}>
                <TrainingWikiNavbar trainingWikiNavbar={trainingWikiNavbar} />
            </div>
        </div>

    )
}

export default TrainingWikiNavbarContainer;