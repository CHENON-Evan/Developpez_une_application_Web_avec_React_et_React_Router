import '../styles/BannerAbout.css';
import BannerImg from '../assets/BannerAbout.png';

function Banner() {
  return (
    <div className="banner_about">
      <img className="banner_about_img" src={BannerImg} alt="Montagnes" />
    </div>
  );
}

export default Banner;
