import styles from './Home.module.css'

function Home() {

    return(
    <>
    <section id="Home" className={styles.section}>
        <main>
            <div className={styles.frame}>
            <div className={styles.card}>
                <img src="/images/Me.jpg" alt="pic"></img>
            </div>
                <div className={styles.desc1}>
                    <p>Hello, I'm</p>
                    <h2>Bryan Maaño</h2>
                    <p>
                        <span data-text1="Aspiring Web Developer" data-text2="Software Engineer">Aspiring Web Developer</span>
                    </p>
                    <p className={styles.desc2}>A motivated and passionate individual with a strong interest in web development. Eager to learn, grow, and apply my skills to build user-friendly and innovative web solutions.</p>
                </div>
            </div>
        </main>
    </section>
    </>
    )
}

export default Home