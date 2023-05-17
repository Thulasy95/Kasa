import { Navigate, useParams } from "react-router-dom";
import dataLogements from "../../datas/logements.json";


function Logement() {

    //On récupére l'id de l'URL :
    const { id } = useParams();

    //On récupére tous les ids de dataLogements.json :
    const idsOfDataLogements = dataLogements.map((logements) => logements.id);
    
    //Si l'id de l'url est bien dans dataLogements.json :
    const isRightId = idsOfDataLogements.includes(id);
    
    return isRightId ? (

        //Si l'id est correcte alors on affiche la page Logement :
        <div>
            <h1>Logement {id}</h1>
            
        </div>

    ):(

        //Si l'id est incorrecte alors on redirige vers la page Error 404 :
        <Navigate to="/Error404" replace={true}/>

    );
}

export default Logement