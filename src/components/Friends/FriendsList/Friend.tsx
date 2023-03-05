import {useAppSelector} from "hooks/redux";
import {getUserById} from "store/selectors";

interface FriendProps {
    friendId: string
}

const Friend = ({friendId}: FriendProps) => {
    const profile = useAppSelector((state) => getUserById(state, friendId));
    return (
        <div>
            {profile && (
                <span>{profile.displayName}</span>
            )}
        </div>
    )
}

export default Friend;