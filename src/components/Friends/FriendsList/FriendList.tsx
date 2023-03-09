import {useAppSelector} from "hooks/redux";
import {getIsFetchingUsers, getUserFollowers} from "store/selectors";
import Friend from "./Friend";
import styles from './FriendList.module.scss';
import Preloader from "components/Common/Preloader/Preloader";

const FriendList = () => {
    const followers = useAppSelector(getUserFollowers);
    const isLoading = useAppSelector(getIsFetchingUsers);

    return (
        <div>
            {isLoading ? <Preloader /> : <>
                {followers && (
                    <div className={styles.friendList}>
                        {followers.map((friend) => <Friend key={friend.id} friendId={friend.friendId} />)}
                    </div>
                )}
            </>}

        </div>
    )
}

export default FriendList;