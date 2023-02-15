import styles from './Profile.module.scss'

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Likes from '../Common/Likes/Likes';

const Profile = () => {
    const image = 'https://images.unsplash.com/photo-1574701148212-8518049c7b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80';

    return (
        <div className={styles.profile}>
            <div className={styles.profile__info}>
              <div className={styles.profile__imageBox}>
                <div className={styles.profile__imageInner}>
                  {
                    image.length
                        ? <img className={styles.profile__image} src={image} alt=""/>
                        : <img className={styles.profile__image} src="https://pngimage.net/wp-content/uploads/2018/06/no-profile-image-png.png" alt=""/>
                  }
                </div>
                <button className={styles.profile__imageUpload}>
                  <AddAPhotoIcon />
                  <span className={styles.profile__imageUploadText}>Upload new image</span>
                </button>
              </div>
              <div className={styles.profile__infoMain}>
                <div className={styles.profile__nameBlock}>
                  <h1 className={styles.profile__userName}>
                    Ann Bright
                  </h1>
                  <button className={styles.profile__edit}>
                    <BorderColorIcon />
                  </button>
                </div>
                <div className={styles.friends}>
                  <p className={styles.friends__count}>
                    <span>Friends: 22</span>
                    <a className={styles.friends__all} href="#">All friends</a>
                  </p>
                  <div className={styles.friends__list}>
                    <a className={styles.friend} href="#">
                      <img className={styles.friend__image} src="https://avatarfiles.alphacoders.com/952/95227.jpg" alt=""/>
                    </a>
                    <a className={styles.friend} href="#">
                      <img className={styles.friend__image} src="https://aniyuki.com/wp-content/uploads/2021/12/aniyuki-sad-anime-avatar-image-90.jpg" alt=""/>
                    </a>
                    <a className={styles.friend} href="#">
                      <img className={styles.friend__image} src="https://upload.wikimedia.org/wikipedia/commons/4/49/Jonathan_G_Meath_portrays_Santa_Claus.jpg" alt=""/>
                    </a>
                    <a className={styles.friend} href="#">
                      <img className={styles.friend__image} src="https://www.disneyplusinformer.com/wp-content/uploads/2022/03/Turning-Red-Profile-Avatar.png" alt=""/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.profile__additional}>
              <div className={styles.profile__additionalInfo}></div>
              <div className={styles.profile__publications}>
                <div className={styles.publication}>
                  <button className={styles.publication__edit}>
                    <MoreHorizIcon />
                  </button>
                  <h3 className={styles.publication__title}>It's my third publication</h3>
                  <div className={styles.publication__content}>
                    <div className={styles.publication__text}>
                      Tak vazhko bez nyogo, ale treba mastutu. I ne rozcharyvatu yogo. Ya bydy kachatu pres poku vin ne pruide!
                    </div>
                    <img className={styles.publication__image} src="https://images.unsplash.com/photo-1574701148212-8518049c7b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="" />
                  </div>
                  <div className={styles.publication__total}>
                    <p className={styles.publication__date}>15/02/2023</p>
                    <Likes count={71} />
                  </div>
                </div>
                <div className={styles.publication}>
                  <button className={styles.publication__edit}>
                    <MoreHorizIcon />
                  </button>
                  <h3 className={styles.publication__title}>It's my second publication</h3>
                  <div className={styles.publication__content}>
                    <div className={styles.publication__text}>
                      Sho takoe? De vin? Ne mozhy trenyvatus' :(
                    </div>
                    {/*<img className={styles.publication__image} src="https://damion.club/uploads/posts/2022-01/1642459018_2-damion-club-p-foni-so-sportivnimi-devushkami-2.jpg" alt="" />*/}
                  </div>
                  <div className={styles.publication__total}>
                    <p className={styles.publication__date}>15/02/2023</p>
                    <Likes count={531} />
                  </div>
                </div>
                <div className={styles.publication}>
                  <button className={styles.publication__edit}>
                    <MoreHorizIcon />
                  </button>
                  <h3 className={styles.publication__title}>It's my first publication</h3>
                  <div className={styles.publication__content}>
                    <div className={styles.publication__text}>
                      This is my results. See you in the GYM. (Z ponedilka)
                    </div>
                    <img className={styles.publication__image} src="https://damion.club/uploads/posts/2022-01/1642459018_2-damion-club-p-foni-so-sportivnimi-devushkami-2.jpg" alt="" />
                  </div>
                  <div className={styles.publication__total}>
                    <p className={styles.publication__date}>6/02/2023</p>
                    <Likes count={42} />
                  </div>
                </div>

              </div>
            </div>
        </div>
    )
}

export default Profile;