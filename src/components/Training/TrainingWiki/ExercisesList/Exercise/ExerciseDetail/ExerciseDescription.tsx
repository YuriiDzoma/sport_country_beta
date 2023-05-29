import styles from './ExerciseDetail.module.scss';

interface ExerciseDescriptionProps {
    imageStart: string;
    imageFinish: string;
}

const ExerciseDescription = ({imageStart, imageFinish}: ExerciseDescriptionProps) => {
    return (
        <div className={styles.description}>
            <h5 className={styles.description__subtitle}>About exercise:</h5>
            <p className={styles.description__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus alias animi aut consequuntur deserunt dolorem, eius eligendi eveniet excepturi fuga hic iusto modi nesciunt numquam optio praesentium sunt voluptates.</p>
            <div className={styles.description__images}>
                <img src={imageStart} alt="start"/>
                <img src={imageFinish} alt="finish"/>
            </div>
            {/*<video width="400" height="250" controls >*/}
            {/*    <source src="https://www.youtube.com/watch?v=qmw7-IFVZPo" type="video/mp4"/>*/}
            {/*</video>*/}
        </div>
    )
}

export default ExerciseDescription;