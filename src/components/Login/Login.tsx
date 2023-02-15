import styles from './Login.module.scss'
import {logOut, signWithGoogle} from "api/api";
import {useAppDispatch} from "hooks/redux";

const Login = () => {
    const dispatch = useAppDispatch()
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
                <button onClick={ () => dispatch(signWithGoogle)}>Sign In With Google</button>
            </div>
            <button onClick={() => dispatch(logOut)}>log out</button>
        </div>
    )
}

export default Login