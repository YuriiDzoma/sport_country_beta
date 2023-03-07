import {useAppSelector} from "hooks/redux";
import {getUserFollowers} from "store/selectors";
import Friend from "./Friend";
import styles from './Friend.module.scss'

const FriendList = () => {
    const followers = useAppSelector(getUserFollowers);

    return (
        <div>
            {followers && (
                <div className={styles.friendList}>
                    {followers.map((friend) => <Friend key={friend.id} friendId={friend.friendId} />)}
                </div>
            )}
        </div>
    )
}

export default FriendList;