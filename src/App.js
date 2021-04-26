import styles from './App.module.css';
import { useSelector } from 'react-redux';
import { LoginPage } from './pages/loginPage/loginPage';

const App = () => {
  const currentUser = useSelector((state) => state.user.name);
  if(!currentUser) {
    return <LoginPage />
  }
  return <div className={styles.App}>Hello, {currentUser}! </div>;
}

export default App;
