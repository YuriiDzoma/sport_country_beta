import {useAppSelector} from "hooks/redux";
import {getNotifications, getUserById} from "store/selectors";
import Notification from "./Notification";

const NotificationsList = () => {
    const notifications = useAppSelector(getNotifications);

    return (
        <div>
            {notifications && (
                <>
                    {notifications.map((item, index) => <Notification key={index} item={item} />)}
                </>
            )}
        </div>
    )
}

export default NotificationsList;