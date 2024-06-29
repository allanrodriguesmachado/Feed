import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import { Header } from './components/Header'

import styles from './App.module.css'
import './global.css'

export default function App() {
  return (
    <>  
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
         <Post />
        </main>
      </div>
    </>
  )
}

