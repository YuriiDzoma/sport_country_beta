import styles from 'App.module.scss';

import NewsList from 'components/News/NewsList/NewsList';

const News = () => {
  return (
    <div className={styles.mainContent__home}>
      <h2 className={styles.mainContent__title}>Index</h2>
      <img
        className={styles.mainContent__background}
        src="https://damion.club/uploads/posts/2022-01/1642459097_71-damion-club-p-foni-so-sportivnimi-devushkami-78.jpg"
        alt=""
      />
      <NewsList />
    </div>
  );
};

export default News;
