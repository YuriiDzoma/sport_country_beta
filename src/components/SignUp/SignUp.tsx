import styles from './SignUp.module.scss';
import { useState, ChangeEvent, FormEvent } from 'react';

import {createUserDocumentFromAuth, createAuthUserWithEmailAndPassword} from 'config/config';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const credentials = await createAuthUserWithEmailAndPassword(email, password);

      if (!credentials) return;

      const { user } = credentials;
      await createUserDocumentFromAuth(user, { displayName });

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
      <div className={styles.signUpForm__wrap}>
        <h2 className={styles.signUpForm__title}>I don't have an account. Register.</h2>
        <form className={styles.signUpForm} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <input
                className={styles.formRow__input}
                type="text"
                placeholder={'Name'}
                name="displayName"
                required
                value={displayName}
                onChange={handleChange}
            />
            <label
                htmlFor=""
                className={styles.formRow__label}
            ></label>
          </div>

          <div className={styles.formRow}>
            <input
                className={styles.formRow__input}
                placeholder={'Email'}
                type='email'
                name='email'
                required
                value={email}
                onChange={handleChange}
            />
            <label
                htmlFor=""
                className={styles.formRow__label}
            ></label>
          </div>

          <div className={styles.formRow}>
            <input
                className={styles.formRow__input}
                placeholder={'Password'}
                type='password'
                name='password'
                required
                value={password}
                onChange={handleChange}
            />
            <label
                htmlFor=""
                className={styles.formRow__label}
            ></label>
          </div>

          <div className={styles.formRow}>
            <input
                className={styles.formRow__input}
                placeholder={'Confirm password'}
                type='password'
                name='confirmPassword'
                required
                value={confirmPassword}
                onChange={handleChange}
            />
            <label
                htmlFor=""
                className={styles.formRow__label}
            ></label>
          </div>

          <div className={styles.formRow}>
            <button className={styles.formRow__submit} type='submit'>Sign Up</button>
          </div>
        </form>
      </div>
  )
}

export default SignUp;