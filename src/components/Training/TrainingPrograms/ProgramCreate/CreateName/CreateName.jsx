import styles from "../../TrainingPrograms.module.scss";


const CreateName = ({formik}) => {

    return (
        <div className={styles.createProgramInfo_name}>
            <span>Name:</span>
            <input id='title' name='title' type='text' onChange={formik.handleChange}
                   value={formik.values.title}/>
        </div>
    )
}

export default CreateName;