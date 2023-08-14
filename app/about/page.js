import styles from './about.module.css'

const AboutPage = () => {
    return (
        <div className={styles.aboutArea}>
            <h1 style={{marginBottom: '30px'}}>About</h1>
            <p>Find out which posts are a hit with Blogger’s built-in analytics. You’ll see where your audience is coming from and what they’re interested in. You can even connect your blog directly to Google Analytics for a more detailed look.</p>
            <br></br>
            <p>Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on Blogger. Sign up to discover why millions of people have published their passions here.</p>
            
        </div>
    );
};

export default AboutPage