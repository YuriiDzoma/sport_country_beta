import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import styles from './Filters.module.scss'
import {FilterProps} from "components/Training/Complexes/Filters/Filters.types";

const Filters: React.FC<FilterProps> = ({filteringPrograms}) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        filteringPrograms(event.target.value, event.target.checked)
    };

    return (
        <div className={styles.filtersWrapper}>
            <div className={styles.types}>
                <h4>Type</h4>
                <FormGroup>
                    <FormControlLabel control={<Checkbox value={'aerobic'} onChange={handleChange} />} label="Aerobic" />
                    <FormControlLabel control={<Checkbox value={'anaerobic'} onChange={handleChange} />} label="Anaerobic" />
                    <FormControlLabel control={<Checkbox value={'mixed'} onChange={handleChange} />} label="Mixed" />
                </FormGroup>
            </div>
            <div className={styles.level}>
                <h4>Level</h4>
                <FormGroup>
                    <FormControlLabel disabled control={<Checkbox value={'beginner'} onChange={handleChange} />} label="Beginner" />
                    <FormControlLabel disabled control={<Checkbox value={'advanced'} onChange={handleChange} />} label="Advanced" />
                    <FormControlLabel disabled control={<Checkbox value={'expert'} onChange={handleChange} />} label="Expert" />
                </FormGroup>
            </div>
        </div>
    )
}

export default Filters;