import {Link, useParams} from 'react-router-dom';

import {useAppSelector} from 'hooks/redux';
import {currentUser, getIsFetchingUsers, getUserById} from 'store/selectors';

import styles from './Profile.module.scss';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import emptyProfileImage from 'assets/img/emptyprofile.jpg';
import {useNavigate} from "react-router";
import Preloader from "components/Common/Preloader/Preloader";


const Profile = () => {
  const { id } = useParams();
  const isLoading = useAppSelector(getIsFetchingUsers);
  const profile = useAppSelector((state) => getUserById(state, id));
  const user = useAppSelector(currentUser);
  const navigate = useNavigate();

  if (!profile || !user) {
    return (
        <h2 className={styles.profile__noProfile}>Loading ...</h2>
    )
  }

  const isMyPage = () => {
    return user.id === id;
  }

  const { photoURL, displayName, city } = profile;

  const getUserPhoto = () => {
    return photoURL
        ? ( <img className={styles.profile__image} src={photoURL} alt="" /> )
        : ( <img
            className={styles.profile__image}
            src={emptyProfileImage}
            alt="No image"
        />)
  }

  return (
      <>
        {isLoading
            ? <Preloader />
            : <div className={styles.profile}>
              {profile && id && (
                  <div className={styles.profile__info}>
                    <div className={styles.profile__imageBox}>
                      <div className={styles.profile__imageInner}>
                        {getUserPhoto()}
                      </div>
                      {
                          isMyPage() && <button className={styles.profile__imageUpload}> <AddAPhotoIcon /> </button>
                      }
                    </div>
                    <div className={styles.profile__infoMain}>
                      <div className={styles.profile__nameBlock}>
                        <h2 className={styles.profile__userName}>{ displayName }</h2>
                        {
                            isMyPage() && <Link to={`/profile/edite/`} className={styles.profile__edit}> <BorderColorIcon /> </Link>
                        }
                      </div>
                      <p className={styles.profile__city}>{city}</p>
                      <div className={styles.userItems}>
                        <button className={styles.userItems__link} onClick={() => navigate(`/training/programs/${id}/`)}>
                          Programs
                        </button>
                        <button className={styles.userItems__link} onClick={() => navigate(`/friends/${id}`)}>
                          Friends
                        </button>
                      </div>
                    </div>
                  </div>
              )}
            </div>}
      </>

  );
};

export default Profile;
