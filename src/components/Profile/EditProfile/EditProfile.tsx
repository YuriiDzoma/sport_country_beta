import styles from './EditProfile.module.scss'
import SelectRegion from "./SelectRegion";

const EditProfile = () => {

    return (
        <div className={styles.editorWrapper}>
            <h3>Edit profile</h3>
            <div className={styles.edit}>
                <label htmlFor={'name'}>Name</label>
                <input className={styles.edit__nameSurname} id={'name'} name={'name'} />
            </div>
            <div className={styles.edit}>
                <label htmlFor={'surname'}>Surname</label>
                <input className={styles.edit__nameSurname} id={'surname'} name={'surname'} />
            </div>
            <div className={styles.edit}>
                <SelectRegion />
            </div>
        </div>
    )
}

export default EditProfile;