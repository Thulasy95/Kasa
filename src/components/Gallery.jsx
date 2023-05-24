import { Link } from "react-router-dom";
import Card from "./Card";
import dataAccommodations from "../datas/Accommodations.json";


//On affiche les cards avec le contenu du fichier logements.json en utilisant l'id comme clé :
const cardFilled = dataAccommodations.map((props) => (

  <article key={props.id}>
    <Link to={`/Accommodation/${props.id}`}>
      <Card cover={props.cover} title={props.title}/>
    </Link>
  </article>

));

function Gallery () {
    return (
      <section className="gallery">{cardFilled}</section>
    );
  }
  
  export default Gallery
  

