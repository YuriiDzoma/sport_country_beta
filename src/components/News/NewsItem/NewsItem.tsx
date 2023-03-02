import React from 'react';

import { NewsItemProps } from 'components/News/NewsItem/NewsItem.types';

import Likes from '../../Common/Likes/Likes';
import styles from './NewsItem.module.scss';

const NewsItem: React.FC<NewsItemProps> = ({ item: { image, title, url, sub, date, likes, author } }) => {
  return (
    <div className={styles.newsItem}>
      <a href={url} className={styles.newsItem__imageLink}>
        <img className={styles.newsItem__image} src={image} alt={title} />
      </a>
      <div className={styles.newsItem__info}>
        {/*<a href="#" className={styles.newsItem__title}>*/}
        {/*  {title}*/}
        {/*</a>*/}
        <p className={styles.newsItem__subTitle}>{sub}</p>
        <div className={styles.newsItem__controls}>
          <div className={styles.newsItem__author}>
            <p className={styles.newsItem__date}>{date}</p>
            {/*<a href="#" className={styles.newsItem__name}>*/}
            {/*  {author}*/}
            {/*</a>*/}
          </div>
          <div className={styles.newsItem__col}>
            <Likes count={likes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
