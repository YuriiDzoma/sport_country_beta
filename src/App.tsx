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
import NewsList from './components/News/NewsList/NewsList';


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
              <Route path='/' element={
                <div className={styles.mainContent__home}>
                  <h2 className={styles.mainContent__title}>Index</h2>
                  <img className={styles.mainContent__background} src="https://damion.club/uploads/posts/2022-01/1642459097_71-damion-club-p-foni-so-sportivnimi-devushkami-78.jpg" alt=""/>
                  {/*<img src="https://damion.club/uploads/posts/2022-01/1642459018_2-damion-club-p-foni-so-sportivnimi-devushkami-2.jpg" alt=""/>*/}
                  {/*<img src="https://damion.club/uploads/posts/2022-01/1642459036_7-damion-club-p-foni-so-sportivnimi-devushkami-7.jpg" alt=""/>*/}
                  {/*<img src="https://damion.club/uploads/posts/2022-01/1642458969_13-damion-club-p-foni-so-sportivnimi-devushkami-13.jpg" alt=""/>*/}

                  <NewsList />

                </div>
              } />
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
