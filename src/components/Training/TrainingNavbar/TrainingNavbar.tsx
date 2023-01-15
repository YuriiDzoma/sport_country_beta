import {CustomLink} from "./CustomLink";
import React from "react";
import {TrainingNavbarProps} from "./TrainingNavbar.types";



const TrainingNavbar: React.FC<TrainingNavbarProps> = ({trainingNavigation}) => {
    return (
            <>{trainingNavigation.map((item) => (
                <div key={item.id}>
                    <CustomLink to={item.url}><span>{item.tittle}</span></CustomLink>
                </div>
            ))}</>
    )
}

export default TrainingNavbar;