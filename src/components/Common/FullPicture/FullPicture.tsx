import styles from './FullPicture.module.scss'
import CloseIcon from '@mui/icons-material/Close';

interface FullPicturesProps {
    setShowFullImage: (values: boolean) => void,
    picture: string
}

const FullPicture = ({picture, setShowFullImage}: FullPicturesProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageBox}>
                <img className={styles.imageBox__image} src={picture} alt={'image'} />
                <button>
                    <CloseIcon className={styles.imageBox__close} color={'warning'}
                               onClick={() => setShowFullImage(false)} fontSize={'large'} />
                </button>
            </div>
        </div>

    )
}

export default FullPicture;