import { useParams } from 'react-router-dom';

import { useAppSelector } from 'hooks/redux';
import { getUserById } from 'store/selectors';

import styles from './Profile.module.scss';

const Profile = () => {
  const { id } = useParams();
  const profile = useAppSelector((state) => getUserById(state, id));

  return (
    <div className={styles.profile}>
      {profile && id && (
        <>
          <span>{profile.displayName}</span>
        </>
      )}
    </div>
  );
};

export default Profile;
