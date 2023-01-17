import TrainingNavbarLink from './TrainingNavbarLinkLink/TrainingNavbarLink';
import React from "react";
import {TrainingNavbarProps} from "./TrainingNavbar.types";

const TrainingNavbar: React.FC<TrainingNavbarProps> = ({trainingNavigation}) => {
    return (
            <>{trainingNavigation.map((item) => (
                <TrainingNavbarLink key={item.id} to={item.url}><span>{item.tittle}</span></TrainingNavbarLink>
            ))}</>
    )
}

export default TrainingNavbar;