import styles from 'App.module.scss';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from 'react-router-dom';

import { fetchExercisesGroups, fetchPrograms } from 'api/api';
import Preloader from 'components/Common/Preloader/Preloader';
import Header from 'components/Header/Header';
import Login from 'components/Login/Login';
import Navigation from 'components/Navigation/Navigation';
import News from 'components/News/News';
import Profile from 'components/Profile/Profile';
import Training from 'components/Training/Training';
import Users from 'components/Users/Users';
import { onAuthStateChangeListener } from 'config/config';
import { createUserDocumentFromAuth } from 'config/config';
import { auth } from 'config/config';
import { useAppDispatch } from 'hooks/redux';
import { fetchUsers } from 'store/actions';
import { setCurrentUser } from 'store/profile-slice';

function App() {
  const dispatch = useAppDispatch();
  dispatch(fetchUsers());
  dispatch(fetchPrograms());
  dispatch(fetchExercisesGroups());

  const [loading, user] = useAuthState(auth);

  useEffect(() => {
    return onAuthStateChangeListener((user: any) => {
      if (user) {
        createUserDocumentFromAuth(user);
        dispatch(setCurrentUser(user.uid));
      } else {
        dispatch(setCurrentUser(null));
      }
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      {!loading && user ? (
        <Preloader />
      ) : (
        <div className={styles.container}>
          <Header />
          <Navigation />
          <div className={styles.mainContent}>
            <Routes>
              <Route path="/" element={<News />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/training/*" element={<Training />} />
              <Route path="/users/*" element={<Users />} />
              <Route path="/login/*" element={<Login />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
