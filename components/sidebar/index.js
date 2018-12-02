import Link from 'next/link';
import styles from './sidebar.scss';

const Sidebar = () => {
  return (
    <nav className={styles.navWrapper}>
      <ul className={styles.nav}>
        <li><Link href={{ pathname: '/'}}><a>Home</a></Link></li>
        <li><Link href={{ pathname: '/'}}><a>About</a></Link></li>
        <li><Link href={{ pathname: '/'}}><a>Service</a></Link></li>
        <li><Link href={{ pathname: '/'}}><a>Blog</a></Link></li>
      </ul>
    </nav>
  )
}

export default Sidebar;