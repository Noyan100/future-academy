import axios from 'axios';
import React from 'react';
import Item from './Item';
import styles from './News.module.scss';
import Skeleton from './Skeleton';

const News: React.FC = () => {
  const [status, setStatus] = React.useState('loading'); // loading, error, successful
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchNews() {
      try {
        const { data } = await axios.get('https://62f37628a84d8c968123bc84.mockapi.io/news');
        setItems(data);
        setStatus('successful');
      } catch (error) {
        alert('Ошибка при получении новостей');
        setStatus('error');
      }
    }
    fetchNews();
  }, []);
  const skeleton = [...new Array(6)].map((obj, index) => <Skeleton key={index} />);
  return (
    <div className={styles.container}>
      {status === 'loading'
        ? skeleton
        : items.map((obj) => (
            <Item
              key={obj.id}
              id={obj.id}
              title={obj.title}
              background={obj.background}
              date={obj.date}
              text={obj.text[0]}
            />
          ))}
    </div>
  );
};

export default News;
