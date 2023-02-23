import SignIn from './SignIn/SignIn';
import styles from './Login.module.scss';

import SignUp from './SignUp/SignUp';

const Login = () => {

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginPage__inner}>
        <div className={styles.loginPage__col}>
          <SignIn />
        </div>
        <div className={styles.loginPage__col}>
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Login;
