import { Link } from 'react-router-dom';
import phonebook from 'images/phonebook.png';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to your phone book!</h1>
      <Link to="/contacts">
        <img src={phonebook} alt="Phonebook" width="128" />
      </Link>
    </div>
  );
};

export default Home;
