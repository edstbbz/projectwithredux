import { useSelector } from 'react-redux';
import styles from './App.module.css';
import { LoginPage } from './pages/loginPage/loginPage';

const App = () => {
  const User = useSelector((state) => state.user.name);
  return <div className={styles.App}>{!User && <LoginPage />}</div>;
}

export default App;
