import styles from './Login.module.scss'
import {signInWithGooglePopup} from 'config/config';
import {useNavigate} from "react-router";

const Login = () => {
    const navigate = useNavigate();
    const signInWithGoogle = async () => {
      await signInWithGooglePopup();
        navigate('/');
    }

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
                <button onClick={signInWithGoogle}>Sign In With Google</button>
            </div>
        </div>
    )
}

export default Login