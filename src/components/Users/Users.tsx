import Preloader from 'components/Common/Preloader/Preloader';
import { useAppSelector } from 'hooks/redux';
import {currentUser, getIsFetchingUsers, getUsers} from 'store/selectors';

import User from './User/User';
import styles from './Users.module.scss';

const Users = () => {
  const users = useAppSelector(getUsers);
  const isLoading = useAppSelector(getIsFetchingUsers);
  const myProfile = useAppSelector(currentUser);

  return (
    <div className={styles.users}>
      {isLoading ? (
        <Preloader />
      ) : (
          <div className={styles.users__list}>
            {users && myProfile && (
                <>
                  {users.map((user) => {
                        if (user.id !== myProfile.id) return <User key={user.id} user={user}/>
                      }
                  )}
                </>
            )}
          </div>
      )}
    </div>
  );
};

export default Users;
