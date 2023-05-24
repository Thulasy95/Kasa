import { Navigate, useParams } from "react-router-dom";
import dataAccommodations from "../../datas/Accommodations.json";
import Slideshow from "../../components/Slideshow";
import AccommodationDescription from "../../components/AccommodationDescription";


function Accommodation() {

    //On récupére l'id de l'URL :
    const { AccommodationId } = useParams();

    //On récupére tous les ids de dataLogements.json :
    const idsOfDataAccommodations = dataAccommodations.map((accommodations) => accommodations.id);
    
    //Si l'id de l'url est bien dans dataLogements.json :
    const isRightId = idsOfDataAccommodations.includes(AccommodationId);

    //on récupère les données du logement :
    const dataOfCurrentAccommodation = dataAccommodations.find((dataAccommodation) => dataAccommodation.id === AccommodationId);

    return isRightId ? (

        //Si l'id est correcte alors on affiche la page Logement :
        <main>
            <Slideshow pictures={dataOfCurrentAccommodation.pictures}/>
            <AccommodationDescription 
                title={dataOfCurrentAccommodation.title}
                location={dataOfCurrentAccommodation.location}
                tag={dataOfCurrentAccommodation.tags}
                name={dataOfCurrentAccommodation.host.name}
                picture={dataOfCurrentAccommodation.host.picture}
                rate={dataOfCurrentAccommodation.rating}
                description={dataOfCurrentAccommodation.description}
                equipments={dataOfCurrentAccommodation.equipments}                
            />
        </main>

    ):(

        //Si l'id est incorrecte alors on redirige vers la page Error 404 :
        <Navigate to="/Error404" replace={true}/>

    );
}

export default Accommodation