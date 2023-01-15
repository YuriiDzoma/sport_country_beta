import styles from "../../TrainingPrograms.module.scss";


const CreateType = ({formik}) => {

    return (
        <div className={styles.createProgramInfo_type}>
            <span>Type:</span>
            <select id='typeOf' name="typeOf" onChange={formik.handleChange} value={formik.values.typeOf}>
                <option value={'aerobic'} >Aerobic</option>
                <option value={'anaerobic'} selected={formik.values.type}>Anaerobic</option>
                <option value={'mixed'} >Mixed</option>
            </select>
        </div>
    )
}

export default CreateType;