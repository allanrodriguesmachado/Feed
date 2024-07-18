import styles from './Sidebar.module.css'
import { PencilLine } from "@phosphor-icons/react";
import {Avatar} from "./Avatar.jsx";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
           <img className={styles.cover} src="https://images.unsplash.com/photo-1584947113929-2d02f9c06203?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzAwfHxEZXZlbG9wZXJ8ZW58MHx8MHx8fDI%3D" alt="Logo Sidebar" />
        
            <div className={styles.profile}>
                <Avatar src="https://github.com/allanrodriguesmachado.png" />
                <strong>Allan Rodrigues</strong>
                <span>Full Stack Developer</span>
            </div>

            <footer className={styles.footer}>
                
                <a href="#"><PencilLine size={19} /> Editar Perfil</a>
            </footer>
        </aside>
        
    )
}