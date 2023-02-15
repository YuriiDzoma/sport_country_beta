import styles from './Login.module.scss'
import {logOut, signWithGoogle} from "api/api";

const Login = () => {
    return (
        <div className={styles.loginWrapper}>
            <div className={styles.loginWrapper__line}>
                <input className={styles.loginWrapper__input} placeholder={'login'} />
            </div>
            <div className={styles.loginWrapper__line}>
                <input className={styles.loginWrapper__input} placeholder={'password'} />
            </div>
            <div className={styles.signIn}>
                <button>Sign in</button>
            </div>
            <p className={styles.loginWrapper__or}>OR</p>
            <div className={styles.signInGoogle}>
                <button onClick={signWithGoogle}>Sign In With Google</button>
            </div>
            <button onClick={logOut}>log out</button>
        </div>
    )
}

export default Login