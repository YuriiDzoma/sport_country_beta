import styles from './../CreateProgramForm.module.scss';

interface CreateTypeProps {
    typeOf: string
    handleChange: any
}

const CreateType = ({ handleChange, typeOf }: CreateTypeProps) => {
  return (
    <div className={styles.createProgramInfo_type}>
      <span className={styles.programLabel}>Type:</span>
      <select id="typeOf" name="typeOf" onChange={handleChange} value={typeOf}>
        <option value={'aerobic'}>Aerobic</option>
        <option value={'anaerobic'}>Anaerobic</option>
        <option value={'mixed'}>Mixed</option>
      </select>
    </div>
  );
};

export default CreateType;
