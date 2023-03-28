import {useAppSelector} from "hooks/redux";
import {getUserPublications} from "store/selectors";
import Post from "./Post";


const PublicationsList = () => {
    let publications = useAppSelector(getUserPublications);

    return (
        <>
            {publications && (
                <>
                    {publications.map((item, index) => <Post item={item} key={index} />)}
                </>
            )}
        </>
    )
}

export default PublicationsList;