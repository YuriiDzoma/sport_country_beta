import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import styles from './EditProfile.module.scss'

const SelectRegion = () => {
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    console.log(country)
    console.log(region)

    return (
        <div className={styles.region}>
            <CountryDropdown
                classes={styles.edit__nameSurname}
                value={country}
                onChange={(val) => setCountry(val)} />
            <RegionDropdown
                classes={styles.edit__nameSurname}
                country={country}
                value={region}
                onChange={(val) => setRegion(val)} />
        </div>
    );
}

export default SelectRegion;
