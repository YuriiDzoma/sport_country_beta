import { Link } from "react-router-dom";
import styles from './ProgramLink.module.scss';
import {useLocation} from "react-router";
import {ProgramLinkProps} from "./ProgramLink.types";
import React from "react";


const ProgramLink:React.FC<ProgramLinkProps> = ({children, to}) => {
    let location = useLocation();
    let activeLocation = location.pathname === to || location.pathname === to+'/redactor/'


    return (
        <Link
            to={to}
            className={`${styles.programLink} ${activeLocation ? styles.link_active : ''}`}
        >
            {children}
        </Link>
    )
}

export {ProgramLink};