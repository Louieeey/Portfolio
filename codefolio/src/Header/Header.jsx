import styles from './Header.module.css';

function Header() {
    // Define the handleScroll function inside the component
    const handleScroll = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>
            <header className={styles.header}>
                <h1>Codefolio</h1>
                <a href="https://github.com/Louieeey">
                    <img src="images/Github.jpg" alt="Github icon" />
                </a>
            </header>
            <nav>
                <ul>
                    <li><a href="#Home" onClick={(e) => handleScroll(e, "Home")}>Home</a></li>
                    <li><a href="#About" onClick={(e) => handleScroll(e, "About")}>About</a></li>
                    <li><a href="#Projects" onClick={(e) => handleScroll(e, "Projects")}>Projects</a></li> 
                    <li><a href="#Contact" onClick={(e) => handleScroll(e, "Contact")}>Contact</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;
