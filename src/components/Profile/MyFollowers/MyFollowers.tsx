import styles from './MyFollowers.module.scss'
import {useAppSelector} from "hooks/redux";
import {getUserFollowers} from "store/selectors";
import Follower from "components/Profile/MyFollowers/Follower";
import {useNavigate} from "react-router";
import {useParams} from "react-router-dom";

const MyFollowers = () => {
    const { id } = useParams();
    const followers = useAppSelector(getUserFollowers);
    const followersList = followers.slice(0,3)
    const navigate = useNavigate();

    return (
        <div className={styles.followersWrapper}>
            {followersList && (
                <>
                    {followersList.map((user, index) => <Follower key={index} user={user.friendId} />)}
                </>
            )}
            <div className={styles.followersWrapper__allFriend}>
                <button className={styles.friends} onClick={() => navigate(`/friends/${id}`)}>
                    See all followers
                </button>
            </div>

        </div>
    )
}

export default MyFollowers;