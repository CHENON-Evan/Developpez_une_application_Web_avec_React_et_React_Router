import { Link } from 'react-router-dom';
import logements from '../data/logements.json';
import '../styles/Gallery.css';

function Gallery() {
  return (
    <section className="gallery">
      {logements.map((logement, index) => (
        <Link to={'/location/' + logement.id} key={index}>
          <article>
            <img className="cover" src={logement.cover} alt={logement.title} />
            <h1 className="logement_title" key={index}>
              {logement.title}
            </h1>
          </article>
        </Link>
      ))}
    </section>
  );
}

export default Gallery;
