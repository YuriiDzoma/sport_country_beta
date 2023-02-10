import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {muscleGroup} from "store/wikiExercises-slyce.types";
import {setExercises} from "store/actions";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {getIsFetching, getMuscleGroups} from "store/selectors";
import Preloader from "components/Common/Preloader/Preloader";

const MuscleGroupListBeta = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const onChangeGroup = (item: muscleGroup) => {
        dispatch(setExercises(item.exercises));
    }
    const dispatch = useAppDispatch();
    const muscleGroups = useAppSelector(getMuscleGroups);
    const isFetching = useAppSelector(getIsFetching);

    return (
        <Box sx={{flexGrow: 1, bgcolor: 'background.paper', height: 224}}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{borderRight: 1, borderColor: 'divider', fontSize: '18px', fontWeight: '600'}}
            >
                {isFetching ? <Preloader /> : muscleGroups.map((item, index) =>
                    <Tab key={index} onClick={() => onChangeGroup(item)} label={item.id}/>)}

            </Tabs>
        </Box>
    );
}

export default MuscleGroupListBeta;