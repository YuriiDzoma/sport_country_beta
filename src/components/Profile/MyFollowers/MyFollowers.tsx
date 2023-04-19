import styles from './MyFollowers.module.scss'
import {useAppSelector} from "hooks/redux";
import {getUserFollowers} from "store/selectors";
import Follower from "components/Profile/MyFollowers/Follower";
import {useNavigate} from "react-router";
import {useParams} from "react-router-dom";

const MyFollowers = () => {
    const { id } = useParams();
    const followers = useAppSelector(getUserFollowers);
    const followersList = followers.slice(0,4)
    const navigate = useNavigate();

    return (
        <div className={styles.followersWrapper}>
            {followersList && followersList.length > 0 && (
                <>
                    <div className={styles.followersInfo}>
                        <div>
                            <p className={styles.followersInfo__counter}>Friends: <span>{followersList.length}</span></p>
                        </div>
                        <div className={styles.followersInfo__allFriend}>
                            <button className={styles.showAllFriends} onClick={() => navigate(`/friends/${id}`)}>
                                See all followers
                            </button>
                        </div>
                    </div>
                    <div className={styles.followersList}>
                        {followersList.map((user, index) => <Follower key={index} user={user.friendId} />)}
                    </div>
                </>
            )}
            {followersList.length === 0 && (
                <div className={styles.notFollowers}>
                    <p>not have followers</p>
                </div>

            )}
        </div>
    )
}

export default MyFollowers;