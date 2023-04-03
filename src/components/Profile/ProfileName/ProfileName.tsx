import styles from "./ProfileName.module.scss";
import GoBack from "components/Common/GoBack/GoBack";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import {Link, useParams} from "react-router-dom";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import emptyProfileImage from "assets/img/emptyprofile.jpg";
import {User} from "store/users-slice.types";
import {useState} from "react";
import FullPicture from "components/Common/FullPicture/FullPicture";

interface ProfileInfoProps {
    profile: User,
    user: User,
}

const ProfileName = ({profile, user}: ProfileInfoProps) => {
    const { id } = useParams();
    const { photoURL, displayName, } = profile;

    const isMyPage = () => {
        return user.id === id;
    }

    const [showFullPicture, setShowFullPicture] = useState(false);
    const setShowFullImage = (values: boolean) => {
        setShowFullPicture(values)
    }


    const getUserPhoto = () => {
        return photoURL
            ? ( <img onClick={() => setShowFullImage(true)} className={styles.profile__image} src={photoURL} alt="" /> )
            : ( <img
                className={styles.profile__image}
                src={emptyProfileImage}
                alt="No image"
            />)
    }

    return (
        <div className={styles.profile__info}>
            <div className={styles.profile__goBack}>
                <GoBack />
            </div>
            <div className={styles.profile__imageBox}>
                <div className={styles.profile__imageInner}>
                    {getUserPhoto()}
                    {showFullPicture && photoURL && (
                        <FullPicture picture={photoURL} setShowFullImage={setShowFullImage} />
                    )}
                </div>
                {isMyPage() && <button className={styles.profile__imageUpload}> <AddAPhotoIcon /> </button>}
            </div>
            <div className={styles.profile__infoMain}>
                <div className={styles.profile__nameBlock}>
                    <h2 className={styles.profile__userName}>{ displayName }</h2>
                    {
                        isMyPage() && <Link to={`/profile/edite/`} className={styles.profile__edit}>
                            <BorderColorIcon />
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default  ProfileName;