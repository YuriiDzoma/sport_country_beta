import styles from './../CreateProgramForm.module.scss';
import {Day} from "store/training-slice.types";

interface CreateExercisesProps {
  days: Day[]
  handleChange: any
  setFieldValue: any
}

const CreateExercises = ({ days, handleChange, setFieldValue }: CreateExercisesProps) => {
  const onAddButton = (dayNumber: number) => {
    setFieldValue(`days[${dayNumber}].exercises`, days[dayNumber].exercises.slice(0, -1));
    setFieldValue(`days[${dayNumber}].workProcess.weights`, days[dayNumber].workProcess.weights.slice(0, -1));
  };
  const onRemoveButton = (dayNumber: number, day: Day) => {
    setFieldValue(`days[${dayNumber}].exercises`, [
      ...days[dayNumber].exercises,
      {
        id: day.exercises.length + 1,
        name: '',
      },
    ]);
    setFieldValue(`days[${dayNumber}].workProcess.weights`, [
      ...days[dayNumber].workProcess.weights,
      {
        exerciseNumber: day.workProcess.weights.length + 1,
        weight: '',
      },
    ]);
  };

  return (
    <div className={styles.createProgramInner}>
      {days.map((day, index) => {
        const dayNumber = index;

        return (
          <div key={index} className={styles.createProgramDay}>
            <h3>Day {day.day}</h3>
            {day.exercises.map((item, index) => (
              <div className={styles.field} key={index}>
                <label className={styles.field__label} htmlFor={`days.${dayNumber}.exercises.${index}.name`}>{index + 1}</label>
                <input
                  id={`days.${dayNumber}.exercises.${index}.name`}
                  onChange={handleChange}
                  name={`days.${dayNumber}.exercises.${index}.name`}
                  type="text"
                  value={days[dayNumber].exercises[index].name}
                />
                <button
                  className={
                    day.exercises.length !== item.id || day.exercises.length === 1 ? styles.disable : styles.remove
                  }
                  type="button"
                  onClick={() => {
                    onAddButton(dayNumber);
                  }}
                ></button>
                <button
                  className={
                    day.exercises.length !== item.id || day.exercises.length === 20 ? styles.disable : styles.add
                  }
                  type="button"
                  onClick={() => {
                    onRemoveButton(dayNumber, day);
                  }}
                ></button>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default CreateExercises;
