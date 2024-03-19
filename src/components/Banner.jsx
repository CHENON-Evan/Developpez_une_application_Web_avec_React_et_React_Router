import '../styles/Banner.css';
import BannerImg from '../assets/Banner.png';

function Banner() {
  return (
    <section className="banner">
      <img
        className="banner_img"
        src={BannerImg}
        alt="Chez vous, partout et ailleurs"
      />
      <h1>Chez vous, partout et ailleurs</h1>
    </section>
  );
}

export default Banner;
