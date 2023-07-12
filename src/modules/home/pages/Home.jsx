import styles from './Home.module.scss';
import logo from '../../../common/assets/images/logo.svg';
import Layers from "../components/layers/Layers";

const Home = () => {
  return (
    <>
      <div className={styles.logo} style={{backgroundImage: `url(${logo})`}}></div>

      <Layers />

      <div style={{height: '100vh'}}/>
    </>
  );
};

export default Home;