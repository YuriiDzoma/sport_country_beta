import styles from './Users.module.scss';
import User from './User/User';

const USERS = [
  {
    id: 1,
    image: 'https://avatarfiles.alphacoders.com/952/95227.jpg',
    name: 'Gosha Kycenko',
    link: '',
  },
  {
    id: 2,
    image: 'https://aniyuki.com/wp-content/uploads/2021/12/aniyuki-sad-anime-avatar-image-90.jpg',
    name: 'Lolita Ko',
    link: '',
  },
  {
    id: 3,
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Jonathan_G_Meath_portrays_Santa_Claus.jpg',
    name: 'Santa Klays',
    link: '',
  },
  {
    id: 4,
    image: 'https://www.disneyplusinformer.com/wp-content/uploads/2022/03/Turning-Red-Profile-Avatar.png',
    name: 'Tip Bilobrusui',
    link: '',
  },
]

const Users = () => {
    return (
        <div className={styles.users}>
            <span>Sorry, page not ready</span>
          <div className={styles.users__list}>
            {
              USERS.map((user) => {
                return(
                    <User key={user.id} user={user} />
                )
              })
            }
          </div>
        </div>
    )
}

export default Users;