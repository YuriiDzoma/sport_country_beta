import NewsItem from '../NewsItem/NewsItem';
import styles from './NewsList.module.scss';

const NEWS_ITEMS = [
  {
    id: 1,
    title: 'New exercise page!',
    sub: 'it amet, consectetur adipisicing elit. Adipisci amet assumenda beatae dignissimos dolorem, dolorum ea eius esse iure modi mollitia nam nesciunt nostrum quae, quo unde voluptatum. Fugiat, quos. this is simple subtitle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet assumenda beatae dignissimos dolorem, dolorum ea eius esse iure modi mollitia nam nesciunt nostrum quae, quo unde voluptatum. Fugiat, quos.',
    image: 'https://www.bodybuilding.com/images/2019/july/best-beginner-weight-training-guide-with-easy-to-follow-workout-header-b-830x467.jpg',
    author: 'Jackie Brown',
    date: '26/05/2023',
    likes: 23,
    url: 'https://google.com/',
  },
  {
    id: 2,
    title: 'New Complex!',
    sub: 'this is simple subtitle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet assumenda beatae dignissimos dolorem, dolorum ea eius esse iure modi mollitia nam nesciunt nostrum quae, quo unde voluptatum. Fugiat, quos. this is simple subtitle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet assumenda beatae dignissimos dolorem, dolorum ea eius esse iure modi mollitia nam nesciunt nostrum quae, quo unde voluptatum. Fugiat, quos.',
    image: 'https://titanboxwear.com/wp-content/uploads/significado-y-ejercicios-complex-crossfit.jpg.webp',
    author: 'Dobra Mamka',
    date: '8/05/2023',
    likes: 54,
    url: 'https://google.com/',
  },
  {
    id: 3,
    title: 'News title 3',
    sub: 'this is simple subtitle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet assumenda beatae dignissimos dolorem, dolorum ea eius esse iure modi mollitia nam nesciunt nostrum quae, quo unde voluptatum. Fugiat, quos. this is simple subtitle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet assumenda beatae dignissimos dolorem, dolorum ea eius esse iure modi mollitia nam nesciunt nostrum quae, quo unde voluptatum. Fugiat, quos.',
    image:
      'https://images.healthshots.com/healthshots/en/uploads/2021/08/19133704/Dos-and-donts-of-workouts-770x433.jpg',
    author: 'Pognatu Porzhatu',
    date: '12/02/2023',
    likes: 777,
    url: 'https://google.com',
  },
];

const NewsList = () => {
  return (
    <div className={styles.newsList}>
      {NEWS_ITEMS.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default NewsList;
