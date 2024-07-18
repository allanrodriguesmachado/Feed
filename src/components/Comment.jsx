import styles from './Comment.module.css';
import {ThumbsUp, Trash} from "@phosphor-icons/react";
import {Avatar} from "./Avatar.jsx";

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/allanrodriguesmachado.png" alt=""/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Allan Rodrigues</strong>
                            <time title="" dateTime="">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar Comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito Bom</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}