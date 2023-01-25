import styles from "./../CreateProgramForm.module.scss";


const CreateName = ({handleChange, values}) => {

    return (
        <div className={styles.createProgramInfo_name}>
            <h2>Edit program: {values.title}</h2>
            <div className={styles.programName}>
              <span className={styles.programLabel}>Name:</span>
              <input id='title' name='title' type='text' onChange={handleChange}
                   value={values.title}/>
            </div>
        </div>
    )
}

export default CreateName;