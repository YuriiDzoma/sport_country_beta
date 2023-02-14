import styles from './NewsList.module.scss';
import NewsItem from '../NewsItem/NewsItem';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const NEWS_ITEMS = [
  {
    id: 1,
    title: 'News title 1',
    sub: 'this is simple subtitle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet assumenda beatae dignissimos dolorem, dolorum ea eius esse iure modi mollitia nam nesciunt nostrum quae, quo unde voluptatum. Fugiat, quos. this is simple subtitle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet assumenda beatae dignissimos dolorem, dolorum ea eius esse iure modi mollitia nam nesciunt nostrum quae, quo unde voluptatum. Fugiat, quos.',
    image: 'https://damion.club/uploads/posts/2022-01/1642459018_2-damion-club-p-foni-so-sportivnimi-devushkami-2.jpg',
    author: 'Jackie Brown',
    date: '2/03/2023',
    likes: 23,
    url: 'https://google.com',
  },
  {
    id: 2,
    title: 'News title 2',
    sub: 'this is simple subtitle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet assumenda beatae dignissimos dolorem, dolorum ea eius esse iure modi mollitia nam nesciunt nostrum quae, quo unde voluptatum. Fugiat, quos. this is simple subtitle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet assumenda beatae dignissimos dolorem, dolorum ea eius esse iure modi mollitia nam nesciunt nostrum quae, quo unde voluptatum. Fugiat, quos.',
    image: 'https://damion.club/uploads/posts/2022-01/1642459036_7-damion-club-p-foni-so-sportivnimi-devushkami-7.jpg',
    author: 'Dobra Mamka',
    date: '8/01/2023',
    likes: 54,
    url: 'https://google.com',
  },
  {
    id: 3,
    title: 'News title 3',
    sub: 'this is simple subtitle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet assumenda beatae dignissimos dolorem, dolorum ea eius esse iure modi mollitia nam nesciunt nostrum quae, quo unde voluptatum. Fugiat, quos. this is simple subtitle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet assumenda beatae dignissimos dolorem, dolorum ea eius esse iure modi mollitia nam nesciunt nostrum quae, quo unde voluptatum. Fugiat, quos.',
    image: 'https://damion.club/uploads/posts/2022-01/1642458969_13-damion-club-p-foni-so-sportivnimi-devushkami-13.jpg',
    author: 'Pognatu Porzhatu',
    date: '12/02/2023',
    likes: 777,
    url: 'https://google.com',
  }
]

const NewsList = () => {
  return(
      <div className={styles.newsList}>
        {
          NEWS_ITEMS.map((item) => {
            return(
                <NewsItem key={item.id} item={item} />
            )
          })
        }
      </div>
  )
}

export default NewsList;