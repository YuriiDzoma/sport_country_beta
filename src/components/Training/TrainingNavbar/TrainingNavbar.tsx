import TrainingNavbarLink from './TrainingNavbarLinkLink/TrainingNavbarLink';
import React from "react";
import {TrainingNavbarProps} from "./TrainingNavbar.types";

const TrainingNavbar: React.FC<TrainingNavbarProps> = ({trainingNavigation}) => {
    return (
            <>{trainingNavigation.map((item) => (
                <div key={item.id}>
                    <TrainingNavbarLink to={item.url}><span>{item.tittle}</span></TrainingNavbarLink>
                </div>
            ))}</>
    )
}

export default TrainingNavbar;