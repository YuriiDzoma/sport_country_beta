import styles from 'App.module.scss';
import Header from 'components/Header/Header';
import Profile from 'components/Profile/Profile';
import Training from 'components/Training/Training';
import Users from 'components/Users/Users';
import Login from 'components/Login/Login';
import Navigation from 'components/Navigation/Navigation';
import { Route, Routes } from "react-router-dom";
import {useAppDispatch} from "hooks/redux";
import {fetchExercisesGroups, fetchPrograms} from "api/api";


function App() {
  const dispatch = useAppDispatch();
  dispatch(fetchPrograms());
  dispatch(fetchExercisesGroups());
  return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Header />
          <Navigation />
          <div className={styles.mainContent}>
            <Routes>
              <Route path='/' element={<>Home</>} />
              <Route path='/profile/*' element={<Profile />} />
              <Route path='/training/*' element={<Training />} />
              <Route path='/users/*' element={<Users />} />
              <Route path='/login/*' element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
