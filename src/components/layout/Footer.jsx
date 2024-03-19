import '../../styles/layout/Footer.css';
import logo from '../../assets/logo_footer.png';

function Footer() {
  return (
    <footer>
      <img className="footer_img" src={logo} alt="" />
      <h1 className="footer_copyright">© 2020 Kasa. All rights reserved</h1>
    </footer>
  );
}

export default Footer;
