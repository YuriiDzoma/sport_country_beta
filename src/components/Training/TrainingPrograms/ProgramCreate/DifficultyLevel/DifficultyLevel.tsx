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

const DifficultyLevel: React.FC<DifficultyLevelProps> = ({onChange, levelDefault}) => {

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                id='level'
                name='level'
                aria-label="Difficult Level"
                defaultValue={levelDefault}
                step={1}
                marks={marks}
                min={1}
                max={5}
                onChange={onChange}
            />
        </Box>
    );
}

export default DifficultyLevel;