import styles from "./../CreateProgramForm.module.scss";


const CreateType = ({handleChange, values}) => {

    return (
        <div className={styles.createProgramInfo_type}>
            <span>Type:</span>
            <select id='typeOf' name="typeOf" onChange={handleChange} value={values.typeOf}>
                <option value={'aerobic'} >Aerobic</option>
                <option value={'anaerobic'} >Anaerobic</option>
                <option value={'mixed'} >Mixed</option>
            </select>
        </div>
    )
}

export default CreateType;