import classes from "./Preloader.module.scss";
import preloader from "../../../assets/img/Spinner.svg";
import React from "react";


let Preloader = () => {
    return (
        <div className={classes.preloader}>
            <img src={preloader} alt="" />
        </div>
    )
}

export default Preloader;