import styles from './header.module.css';

function Header() {
    return (
        <>
            <header className={styles.header}>
                Header Logo
                <nav>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/contact'>Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;