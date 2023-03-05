import {useAppSelector} from "hooks/redux";
import {getUserFollowers} from "store/selectors";
import Friend from "./Friend";

const FriendList = () => {
    const followers = useAppSelector(getUserFollowers);

    return (
        <div>
            {followers && (
                <div>
                    {followers.map((friend) => <Friend key={friend.id} friendId={friend.friendId} />)}
                </div>
            )}
        </div>
    )
}

export default FriendList;