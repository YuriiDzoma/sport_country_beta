import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';

import Preloader from 'components/Common/Preloader/Preloader';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setExercises } from 'store/actions';
import { getIsFetching, getMuscleGroups } from 'store/selectors';
import { muscleGroup } from 'store/wikiExercises-slyce.types';

const MuscleGroupsList = () => {
  const dispatch = useAppDispatch();
  const muscleGroups = useAppSelector(getMuscleGroups);
  const isFetching = useAppSelector(getIsFetching);
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const onChangeGroup = (item: muscleGroup) => {
    dispatch(setExercises(item.exercises));
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper' }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {isFetching ? (
          <Preloader />
        ) : (
          muscleGroups.map((item, index) => (
            <Tab sx={{ fontSize: '12px' }} key={index} onClick={() => onChangeGroup(item)} label={item.id} />
          ))
        )}
      </Tabs>
    </Box>
  );
};

export default MuscleGroupsList;
