import styles from './SignIn.module.scss';
import {ChangeEvent, FormEvent, useState} from 'react';
import {useNavigate} from 'react-router';
import {signInAuthUserWithEmailAndPassword, signInWithGooglePopup} from '../../config/config';

const defaultFormFields = {
  email: '',
  password: '',
}

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    navigate('/');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value})
  }

  return(
      <div className={styles.loginWrapper}>
        <h2 className={styles.loginWrapper__title}>I have an account. Sign In.</h2>
        <form className={styles.loginWrapper__form} onSubmit={handleSubmit}>
          <div className={styles.loginWrapper__line}>
            <input
                className={styles.loginWrapper__input}
                placeholder="email"
                type='email'
                name='email'
                required
                value={email}
                onChange={handleChange}
            />
          </div>
          <div className={styles.loginWrapper__line}>
            <input
                className={styles.loginWrapper__input}
                placeholder="password"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
            />
          </div>
          <div className={styles.signIn}>
            <button type="submit">Sign in</button>
          </div>
          <p className={styles.loginWrapper__or}>OR</p>
          <div className={styles.signInGoogle}>
            <button onClick={signInWithGoogle} type="button">Sign In With Google</button>
          </div>
        </form>
      </div>
  )
}

export default SignIn;