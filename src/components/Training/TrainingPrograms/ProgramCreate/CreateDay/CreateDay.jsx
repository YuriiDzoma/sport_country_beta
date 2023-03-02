import styles from './../CreateProgramForm.module.scss';

const CreateDay = ({ values, setFieldValue }) => {
  return (
    <div className={styles.createDay}>
      <div className={values.days.length === 1 ? styles.disable : styles.createDay_remove}>
        <button
          type="button"
          onClick={() => {
            setFieldValue(`days`, values.days.slice(0, -1));
          }}
        >
          Remove day
        </button>
      </div>

      <div className={values.days.length === 7 ? styles.disable : styles.createDay_add}>
        <button
          type="button"
          onClick={() => {
            setFieldValue(`days`, [
              ...values.days,
              {
                day: values.days.length + 1,
                exercises: [
                  { id: 1, name: '' },
                  { id: 2, name: '' },
                  { id: 3, name: '' },
                ],
                workHistory: [],
                workProcess: {
                  date: '',
                  weights: [
                    { exerciseNumber: 1, weight: '' },
                    { exerciseNumber: 2, weight: '' },
                    { exerciseNumber: 3, weight: '' },
                  ],
                },
              },
            ]);
          }}
        >
          Add day
        </button>
      </div>
    </div>
  );
};

export default CreateDay;
