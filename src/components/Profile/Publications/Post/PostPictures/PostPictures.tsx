import styles from './PostPictures.module.scss';
import {useState} from "react";
import FullPicture from "components/Common/FullPicture/FullPicture";


const PostPictures = ({pictures}: {pictures: string[]}) => {
    const [showFullImage, setShowFullImage] = useState(false);
    const showPicture = (values: boolean) => {
        setShowFullImage(values)
    }

    return (
        <div className={styles.pictures}>
            {pictures.map((picture, index) =>
                <div key={index}>
                    <img className={styles.pictures__image} alt={'image'} src={picture}
                         onClick={() => showPicture(true)} />
                    {showFullImage && (
                        <FullPicture picture={picture} setShowFullImage={setShowFullImage}/>
                    )}
                </div>

            )}
        </div>
    )
}

export default PostPictures;