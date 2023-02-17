import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react';

import styles from './Likes.module.scss';

const Likes = ({ count }) => {
  return (
    <div className={styles.like}>
      {/*<a href="#" className={styles.like__count}>*/}
      {/*  {count}*/}
      {/*</a>*/}
      <button className={styles.like__button}>
        <FavoriteBorderIcon className={styles.like__icon} />
        <FavoriteIcon className={styles.like__icon} />
      </button>
    </div>
  );
};

export default Likes;
