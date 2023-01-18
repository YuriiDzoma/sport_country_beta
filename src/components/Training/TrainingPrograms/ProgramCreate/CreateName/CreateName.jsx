import styles from "./../CreateProgramForm.module.scss";


const CreateName = ({handleChange, values}) => {

    return (
        <div className={styles.createProgramInfo_name}>
            <span>Name:</span>
            <input id='title' name='title' type='text' onChange={handleChange}
                   value={values.title}/>
        </div>
    )
}

export default CreateName;