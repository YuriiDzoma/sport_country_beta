import styles from "./../CreateProgramForm.module.scss";


const CreateExercises = ({values, handleChange, setFieldValue}) => {
    const onAddButton = (dayNumber) => {
        setFieldValue(`days[${dayNumber}].exercises`, values.days[dayNumber].exercises.slice(0, -1));
        setFieldValue(`days[${dayNumber}].workProcess.weights`, values.days[dayNumber].workProcess.weights.slice(0, -1));
    };
    const onRemoveButton = (dayNumber, day) => {
        setFieldValue(`days[${dayNumber}].exercises`, [...values.days[dayNumber].exercises, {
            id: day.exercises.length + 1,
            name: '',
        }]);
        setFieldValue(`days[${dayNumber}].workProcess.weights`, [...values.days[dayNumber].workProcess.weights, {
            exerciseNumber: day.workProcess.weights.length + 1,
            weight: '',
        }]);
    }

    return (
        <div className={styles.createProgramInner}>
            {values.days.map((day, index) => {
                const dayNumber = index;

                return (
                    <div key={index} className={styles.createProgramDay}>
                            <h3>Day {day.day}</h3>
                            {day.exercises.map((item, index) => (
                                    <div className={styles.field} key={index}>
                                        <input id={`days.${dayNumber}.exercises.${index}.name`}
                                               onChange={handleChange}
                                               name={`days.${dayNumber}.exercises.${index}.name`} type='text'
                                               value={values.days[dayNumber].exercises[index].name}
                                        />
                                        <button
                                            className={day.exercises.length !== item.id || day.exercises.length === 1 ? styles.disable : styles.remove}
                                            type="button"
                                            onClick={() => {
                                                onAddButton(dayNumber);
                                            }}
                                        >
                                        </button>
                                        <button
                                            className={day.exercises.length !== item.id ? styles.disable : styles.add}
                                            type="button"
                                            onClick={() => {
                                                onRemoveButton(dayNumber, day)
                                            }}
                                        >
                                        </button>
                                    </div>
                                )
                            )}
                        </div>
                )
            })}
        </div>
    )
}

export default CreateExercises;