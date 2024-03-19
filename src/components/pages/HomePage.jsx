import Header from '../layout/Header.jsx';
import Banner from '../Banner.jsx';
import Gallery from '../Gallery.jsx';
import Footer from '../layout/Footer.jsx';
import '../../styles/pages/HomePage.css';

function HomePage() {
  return (
    <div>
      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
}

export default HomePage;
