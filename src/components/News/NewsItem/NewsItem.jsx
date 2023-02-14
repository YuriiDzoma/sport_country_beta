import styles from './NewsItem.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const NewsItem = ({ item }) => {
  console.log(item);

  return(
      <div className={styles.newsItem}>
        <a href={ item.url } className={styles.newsItem__imageLink}>
          <img className={styles.newsItem__image} src={ item.image } alt={ item.title }/>
        </a>
        <div className={styles.newsItem__info}>
          <a href="#" className={styles.newsItem__title}>
            { item.title }
          </a>
          <p className={styles.newsItem__subTitle}>
            { item.sub }
          </p>
          <div className={styles.newsItem__controls}>
            <div className={styles.newsItem__author}>
              <p className={styles.newsItem__date}>
                { item.date}
              </p>
              <a href="#" className={styles.newsItem__name}>
                { item.author }
              </a>
            </div>
            <div className={styles.newsItem__col}>
               <span className={styles.newsItem__likesCount}>
                { item.likes }
              </span>
              <button className={styles.newsItem__like}>
                <FavoriteBorderIcon className={styles.newsItem__likesIcon} />
                <FavoriteIcon className={styles.newsItem__likesIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default NewsItem;