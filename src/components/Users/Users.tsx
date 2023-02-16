import styles from './Users.module.scss';
import User from './User/User';
import {useAppSelector} from "hooks/redux";
import {getIsFetchingUsers, getUsers} from "store/selectors";
import Preloader from "components/Common/Preloader/Preloader";

const Users = () => {
    const users = useAppSelector(getUsers);
    const isLoading = useAppSelector(getIsFetchingUsers)
    return (
        <div className={styles.users}>
            {isLoading
                ? <Preloader/>
                : <div className={styles.users__list}>
                    {users && (
                        <>
                            {users.map((user) => <User key={user.id} user={user}/>)}
                        </>
                    )
                    }
                </div>
            }
        </div>
    )
}

export default Users;