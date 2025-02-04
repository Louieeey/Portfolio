import styles from './Header.module.css'

function Header() {

    return(
    <>
        <header className={styles.header}>
            <h1>Codefolio</h1>
            <a href="https://github.com/Louieeey"><img src="images/Github.jpg" alt="Github icon"></img></a>
        </header>
        print
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Blog</a></li>
            </ul>
        </nav>
    </>
    )
}

export default Header