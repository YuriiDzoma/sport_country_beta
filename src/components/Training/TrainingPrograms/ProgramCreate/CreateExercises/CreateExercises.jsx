import styles from "./../CreateProgramForm.module.scss";


const CreateExercises = ({values, handleChange, setFieldValue}) => {

    return (
        <div>
            {values.days.map((day, index) => {
                const dayNumber = index;

                return (
                    <div key={index}>
                        <div>
                            <span>Day {day.day}</span>

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
                                                setFieldValue(`days[${dayNumber}].exercises`, values.days[dayNumber].exercises.slice(0, -1))
                                            }}
                                        >
                                        </button>
                                        <button
                                            className={day.exercises.length !== item.id ? styles.disable : styles.add}
                                            type="button"
                                            onClick={() => {
                                                setFieldValue(`days[${dayNumber}].exercises`, [...values.days[dayNumber].exercises, {
                                                    id: day.exercises.length + 1,
                                                    name: '',
                                                }])
                                            }}
                                        >
                                        </button>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CreateExercises;