import {useParams} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {currentUser, getIsFetchingUsers, getUserById} from 'store/selectors';

import styles from './Profile.module.scss';
import {useNavigate} from "react-router";
import Preloader from "components/Common/Preloader/Preloader";
import ProfileName from "components/Profile/ProfileName/ProfileName";
import ProfileInfo from "components/Profile/ProfileInfo/ProfileInfo";
import Publications from "components/Profile/Publications/Publications";
import MyFollowers from "components/Profile/MyFollowers/MyFollowers";
import {getUserFriends, getUserPublications} from "api/api";
import {setFollowers, setPublications} from "store/users-slice";


const Profile = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const isLoading = useAppSelector(getIsFetchingUsers);
  const profile = useAppSelector((state) => getUserById(state, id));
  const user = useAppSelector(currentUser);
  const navigate = useNavigate();
  if (id) {
    getUserFriends(id).then(response => dispatch(setFollowers(response)));
    getUserPublications(id).then(response => dispatch(setPublications(response)));
  }

  if (!profile || !user) {
    return (
        <h2 className={styles.profileWrapper__noProfile}>Loading ...</h2>
    )
  }

  return (
      <>
        {isLoading
            ? <Preloader />
            : <>
              {profile && id && (
                  <div className={styles.profileWrapper}>
                    <div className={styles.profileData}>
                      <ProfileName profile={profile} user={user} />
                      <ProfileInfo profile={profile} />
                      <MyFollowers />
                      <button className={styles.userItems__link} onClick={() => navigate(`/training/programs/${id}/`)}>
                        Programs
                      </button>
                    </div>
                    <Publications />
                  </div>
              )}
            </>}
      </>

  );
};

export default Profile;
