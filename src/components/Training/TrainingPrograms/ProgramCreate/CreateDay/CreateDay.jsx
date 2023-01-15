import styles from "../../TrainingPrograms.module.scss";


const CreateDay = ({formik}) => {
    return (
        <div className={styles.createDay}>

            <div className={ formik.values.days.length === 1 ? styles.disable : styles.createDay_remove}>
                <button type="button" onClick={()=> {
                    formik.setFieldValue(`days`, formik.values.days.slice(0, -1))
                }}>remove</button>
            </div>

            <div className={ formik.values.days.length === 7 ? styles.disable : styles.createDay_add}>
                <button type="button" onClick={()=> {
                    formik.setFieldValue(`days`, [...formik.values.days, {
                        day: formik.values.days.length + 1,
                        exercises: [{id: 1, name: ''}, {id: 2, name: ''}, {id: 3, name: ''},]
                    }])
                }} >add</button>
            </div>

        </div>
    )
}

export default CreateDay;