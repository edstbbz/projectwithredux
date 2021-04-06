import styles from './App.module.css';
import Header from './components/header'

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Header></Header>
      </header>
    </div>
  );
}

export default App;
