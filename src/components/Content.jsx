import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logements from '../data/logements.json';
import Carrousel from './carrousel/Carrousel';
import Tag from './Tag';
import Rating from './Rating';
import Dropdown from './dropdown/Dropdown';
import '../styles/Content.css';

function Content() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedLogement, setSelectedLogement] = useState({
    id: '',
    title: ' ',
    cover: '',
    pictures: [],
    description: '',
    host: {
      name: '',
      picture: '',
    },
    rating: '',
    location: '',
    equipments: [],
    tags: [],
  });
  useEffect(() => {
    const selectedLogement = logements.find((logement) => logement.id === id);

    if (!selectedLogement) {
      navigate('*');
    } else {
      setSelectedLogement(selectedLogement);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="content">
      <Carrousel slides={selectedLogement.pictures} />
      <div className="logement_description">
        <div className="logement_location">
          <h1 className="title_logement">{selectedLogement.title}</h1>
          <p>{selectedLogement.location}</p>
          <div className="tags">
            {selectedLogement &&
              selectedLogement.tags.map((tag, tagIndex) => (
                <Tag key={tagIndex} tag={tag} />
              ))}
          </div>
        </div>
        <div className="logement_host">
          <div className="host">
            <p>{selectedLogement.host.name}</p>
            <img src={selectedLogement.host.picture} alt="" />
          </div>
          <div className="stars">
            <Rating rating={selectedLogement.rating} />
          </div>
        </div>
      </div>

      <div className="description_equipements">
        <div className="description">
          <Dropdown title="Description" item={selectedLogement.description} />
        </div>
        <div className="equipements">
          <Dropdown title="Équipements" item={selectedLogement.equipments} />
        </div>
      </div>
    </section>
  );
}

export default Content;
