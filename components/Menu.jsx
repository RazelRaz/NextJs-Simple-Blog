'use client'
import styles from './Menu.module.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const Menu = () => {

    let currentPath = usePathname();

    return (
        <div className={styles.mainmenu}>
            <div className={styles.logo}>
                <h1>BLOGO</h1>
            </div>
            <ul>
                <Link className={currentPath === '/' ? 'active' : ''} href={"/"}>Home</Link>
                <Link className={currentPath === '/about' ? 'active' : ''} 
                href={"/about"}>
                    About
                </Link>

                <Link className={currentPath === '/blog' ? 'active' : ''} href={"/blog"}>Blog</Link>
                
            </ul>
        </div>
    );
};

export default Menu;