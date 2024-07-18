import {Sidebar} from './components/Sidebar'
import {Post} from './components/Post'
import {Header} from './components/Header'

import styles from './App.module.css'
import './global.css'

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/allanrodriguesmachado.png",
            name: "Allan",
            role: "DevAllan"
        },
        content: [
            {type: 'paragraph', content: 'Fala galeraa 👋'},
            {
                type: 'paragraph',
                content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
            },
            {type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2024-05-03 20:00:00')
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://github.com/allanrodriguesmachado.png",
            name: "Allan",
            role: "DevAllan"
        },
        content: [
            {type: 'paragraph', content: 'Fala galeraa 👋'},
            {
                type: 'paragraph',
                content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
            },
            {type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2024-05-10 20:00:00')
    }
]

export default function App() {
    return (
        <>
            <Header/>

            <div className={styles.wrapper}>
                <Sidebar/>

                <main>
                    <Post/>
                    <Post/>
                </main>
            </div>
        </>
    )
}

