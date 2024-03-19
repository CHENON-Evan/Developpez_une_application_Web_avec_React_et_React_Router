import Header from '../layout/Header.jsx';
import BannerAbout from '../BannerAbout.jsx';
import AboutContent from '../AboutContent.jsx';
import Footer from '../layout/Footer.jsx';
import '../../styles/pages/About.css';

function About() {
  return (
    <div>
      <Header />
      <BannerAbout />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About;
