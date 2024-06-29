import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                 <img className={styles.avatar} src="https://github.com/allanrodriguesmachado.png" alt="" />

                 <div className={styles.authorInfo}>
                    <strong>Allan Rodrigues</strong>
                    <span>FullStack Developer</span>
                 </div>
                </div>

                <time title="" datetime=""></time>
            </header>

            <div className={styles.content}>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </article>
    )
}