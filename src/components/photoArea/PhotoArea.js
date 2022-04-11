import styles from './PhotoArea.module.css';
import logo from '../../assets/logo.png';
import banner2 from '../../assets/banner2.png';
import { useContext } from 'react';
import banner1 from '../../assets/banner1.png';
import bannerDark1 from '../../assets/bannerDark1.png';
import bannerDark2 from '../../assets/bannerDark2.png';
import { FormContext } from '../context/context';

const PhotoArea = () => {
  const { isDark } = useContext(FormContext);

  return (
    <div className={`${styles.photoAreaContainer} ${isDark && styles.dark}`}>
      <div>
        <img className={styles.logo} src={logo} alt='logo' />
      </div>
      <h1 className={styles.heading}>YAZILIM PATİKALARI</h1>
      <div className={styles.infoTextContainer}>
        <p className={styles.infoText}>
          Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir
          eğitim modelidir. Ekibini büyütmek isteyen şirketler bir bootcamp'lere
          sponsor olurlar. Teknik beceriler kazanmaya başlamış ancak işe girmeye
          hazır olmayan kişiler bootcamp'lere başvururlar. Seçilen adaylar 4-8
          haftalık ücretsiz ve yoğun eğitime kabul alırlar. Bootcamp'lerde
          başarılı olan öğrenciler sponsor şirkette ya da sektörde başka
          şirketlere işe yerleşirler.
        </p>
        <div className={styles.bannerContainer}>
          <img
            className={styles.banner1}
            src={isDark ? bannerDark1 : banner1}
            alt='banner'
          />
          <img
            className={styles.banner2}
            src={isDark ? bannerDark2 : banner2}
            alt='banner'
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoArea;
