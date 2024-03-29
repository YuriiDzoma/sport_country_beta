import GoBack from 'components/Common/GoBack/GoBack';

import styles from './../CreateProgramForm.module.scss';

interface CreateName {
    title: string
    handleChange: any
}

const CreateName = ({ handleChange, title }: CreateName) => {
  return (
    <div className={styles.createProgramInfo_name}>
      <GoBack />
      <div className={styles.programName}>
        <span className={styles.programLabel}>Name:</span>
        <input id="title" name="title" type="text" onChange={handleChange} value={title} />
      </div>
    </div>
  );
};

export default CreateName;
