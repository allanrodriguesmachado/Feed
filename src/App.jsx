import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

export default function App() {
  return (
    <>  
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>POST</main>
      </div>
    </>
  )
}

