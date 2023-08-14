import Link from 'next/link';
import styles from './home.module.css'


const HomePage = () => {
    return (
        <div className={styles.heroArea}>
            
                <h1>Welcome To Blogo</h1>
            
                <p style={{textAlign:'center'}}>The spirit of wanderlust is an undying flame that burns eagerly in the hearts of those who yearn to explore the unknown. Travelling mindfully transforms the spirit of a traveller from a simple desire to see the world to a more profound expedition of connections and understanding on a whole other level. It tells us that a place we visit is not just a tick off the bucket list, but rich with culture and life; each aspect of which has a story to tell us on our travels. The more we immerse ourselves in these activities, the deeper our understanding.</p>

                <Link href="/blog">Visit Blog</Link>

        </div>
    );
};

export default HomePage;