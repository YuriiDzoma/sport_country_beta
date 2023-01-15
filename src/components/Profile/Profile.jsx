import styles from './Profile.module.scss'

const Profile = () => {

    return (
        <div className={styles.profileWrapper}>
            <div>
                <span>Avatar</span>
                <span>Name</span>
            </div>
            <div>
                <span>about me</span>
            </div>
        </div>
    )
}

export default Profile;