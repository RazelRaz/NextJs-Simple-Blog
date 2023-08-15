import Link from 'next/link';
import styles from './home.module.css'
import Image from 'next/image'
import HumanImg from '../../public/images/human.jpg'
import Insta from '../../public/images/instagram.png'
import Pint from '../../public/images/pinterest.png'
import Twit from '../../public/images/twitter.png'

const HomePage = () => {
    return (
        <div className={styles.heroArea}>
            
            
                <Image src={HumanImg}></Image>
                <div className={styles.socialM}>
                    <Image src={Insta}></Image>
                    <Image src={Twit}></Image>
                    <Image src={Pint}></Image>
                </div>
                <h1>Welcome To Blogo</h1>

            
                <p style={{textAlign:'center'}}>The spirit of wanderlust is an undying flame that burns eagerly in the hearts of those who yearn to explore the unknown. Travelling mindfully transforms the spirit of a traveller from a simple desire to see the world to a more profound expedition of connections and.</p>

                <Link href="/blog">Visit Blog</Link>

        </div>
    );
};

export default HomePage;