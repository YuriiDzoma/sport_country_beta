import {Link} from "react-router-dom";
import styles from './TrainingWiki.module.scss'
import {TrainingWikiNavbarProps} from "./TrainingWikiNavbar.types";
import React from "react";


const TrainingWikiNavbar: React.FC<TrainingWikiNavbarProps> = ({trainingWikiNavbar}) => {
    return (
        <div className={styles.TrainingWikiNavbar}>
            {trainingWikiNavbar.map((item) => (
                <Link key={item.id} to={item.url}>
                    <span>{item.title}</span>
                </Link>
            ))}

        </div>
    )
}

export default TrainingWikiNavbar;