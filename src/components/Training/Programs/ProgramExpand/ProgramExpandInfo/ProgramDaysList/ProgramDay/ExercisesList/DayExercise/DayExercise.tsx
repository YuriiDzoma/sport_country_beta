import React from 'react';

import { DayExerciseProps } from 'components/Training/Programs/ProgramExpand/ProgramExpandInfo/ProgramDaysList/ProgramDay/ExercisesList/DayExercise/DayExercise.types';

const DayExercise: React.FC<DayExerciseProps> = ({ exercise }) => {
  return (
    <p title={`${exercise.name}`}>
      <span>
        {exercise.id}: {exercise.name}
      </span>
    </p>
  );
};

export default DayExercise;
