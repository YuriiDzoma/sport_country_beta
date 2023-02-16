import styles from './Users.module.scss';
import User from './User/User';
import {useAppSelector} from "hooks/redux";
import {getUsers} from "store/selectors";

const Users = () => {
    const users = useAppSelector(getUsers);
    return (
        <div className={styles.users}>
            <div className={styles.users__list}>
                {users && (
                    <>
                        {users.map((user) => <User key={user.id} user={user}/>)}
                    </>
                )
                }
            </div>
        </div>
    )
}

export default Users;