import styles from './Layers.module.scss';
import layer1 from '../../../../common/assets/images/layer-1.jpg';
import layer2 from '../../../../common/assets/images/layer-2.png';
import layer5 from '../../../../common/assets/images/layer-5.png';
import layer6 from '../../../../common/assets/images/layer-6.png';
import {useRainAnimation} from "../../../../utils/rain";

const Layers = () => {
  const RainAnimation = useRainAnimation();

  return (
    <section className={styles.layers}>
      <div className={styles.container}>
        <div className={`${styles.item} ${styles['layer-1']}`} style={{backgroundImage: `url(${layer1})`}}></div>
        <div className={`${styles.item} ${styles['layer-2']}`} style={{backgroundImage: `url(${layer2})`}}></div>
        <div className={`${styles.item} ${styles['layer-3']}`}>
          <div className={styles.hero}>
            <h1 className={styles.title}>Natural Forest <span>HTML / CSS</span></h1>
            <p className={styles.text}>Creating a beautiful 3D website with a "lens effect"</p>
            <button className={styles.btn}>Start Learning</button>
          </div>
        </div>
        <div className={`${styles.item} ${styles['layer-4']}`}>
          {/*{ RainAnimation }*/}
        </div>
        <div className={`${styles.item} ${styles['layer-5']}`} style={{backgroundImage: `url(${layer5})`}}></div>
        <div className={`${styles.item} ${styles['layer-6']}`} style={{backgroundImage: `url(${layer6})`}}></div>
      </div>
    </section>
  );
};

export default Layers;
