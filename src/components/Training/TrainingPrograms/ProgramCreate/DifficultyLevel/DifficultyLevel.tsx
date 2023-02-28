import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {
    DifficultyLevelProps
} from "components/Training/TrainingPrograms/ProgramCreate/DifficultyLevel/DifficultyLevel.types";


const marks = [
    {
        value: 1,
        label: 'Beginner',
    },
    {
        value: 2,
        label: 'Intermediate',
    },
    {
        value: 3,
        label: 'Advanced',
    },
    {
        value: 4,
        label: 'Expert',
    },
    {
        value: 5,
        label: 'Professional',
    },
];

function valuetext(value: number) {
    let result
    switch (value) {

        case 1: {
            result = 'Beginner';
            break;
        }
        case 2: {
            result ='Intermediate';
            break;
        }
        case 3: {
            result ='Advanced';
            break;
        }
        case 4: {
            result ='Expert';
            break;
        }
        case 5: {
            result ='Professional';
            break;
        }
        default: result = 'Beginner'

    }
    return result;
}

const DifficultyLevel: React.FC<DifficultyLevelProps> = ({setLevelValue, isEditor, levelDefault}) => {
    const defaultValue =
        levelDefault === 'Beginner' ? 1
            : levelDefault === 'Intermediate' ? 2
                : levelDefault === 'Advanced' ? 3
                    : levelDefault === 'Expert' ? 4
                        : levelDefault === 'Professional' ? 5 : 1
    const handleChange = (event: Event, newValue: number | number[]) => {
        if (newValue === 1) {
            setLevelValue('Beginner');
        }
        if (newValue === 2) {
            setLevelValue('Intermediate');
        }
        if (newValue === 3) {
            setLevelValue('Advanced');
        }
        if (newValue === 4) {
            setLevelValue('Expert');
        }
        if (newValue === 5) {
            setLevelValue('Professional');
        }
    };


    return (
        <Box sx={{ width: 300 }}>
            <Slider
                getAriaValueText={valuetext}
                // orientation="vertical"
                aria-label="Difficult Level"
                defaultValue={defaultValue}
                step={1}
                marks={marks}
                min={1}
                max={5}
                onChange={handleChange}
            />
        </Box>
    );
}

export default DifficultyLevel;