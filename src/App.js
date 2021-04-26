import styles from './App.module.css'
import { LoginPage } from './pages/loginPage/loginPage';

function App() {
  return (
    <div className={styles.App}> 
      <LoginPage />
    </div>
  );
}

export default App;
