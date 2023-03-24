import {useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {getIsFetchingUsers, getUserById} from "store/selectors";
import React from "react";
import UserInfo from "components/Common/UserInfo/UserInfo";
import FriendList from "components/Friends/FriendsList/FriendList";
import Preloader from "components/Common/Preloader/Preloader";
import {getUserFriends} from "api/api";
import {setFollowers} from "store/users-slice";

const Friends = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    if (id) {
        getUserFriends(id).then(response => dispatch(setFollowers(response)));
    }
    const isLoading = useAppSelector(getIsFetchingUsers);

    const profile = useAppSelector((state) => getUserById(state, id));
    return (
        <div>
            <UserInfo id={id} profile={profile} />
            {isLoading ? <Preloader /> : <FriendList />}
        </div>
    )
}

export default Friends;