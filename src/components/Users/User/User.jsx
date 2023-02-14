import styles from './User.module.scss';

const User = ({ user }) => {
  const {name, image, link} = user;

  return(
      <a href={link} className={styles.userBlock}>
        <img className={styles.userBlock__image} src={ image } alt="" />
        <p className={styles.userBlock__name}>{ name }</p>
      </a>
  )
}

export default User;