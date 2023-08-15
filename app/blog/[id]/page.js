import blogData from '../../../data/blogData.json'
import styles from './id.module.css'

const SinglePage = ({params: {id}}) => {
  const post = blogData.find((post) => post.id === parseInt(id));
  return (
    <div className={styles.SinglePage}>
      <h3>{post.id}.{post.title}</h3>
      <span>Date: {post.date}</span>
      <p>{post.content}</p>
      
    </div>
  );
};

export default SinglePage;