import lightPinkStar from "../assets/star-lightPink.svg";
import pinkStar from "../assets/star-pink.svg";

function Rate(props) {

    //On récupère la valeur du rating du logement :
    const ratingNumber = props.ratingNumber;

    //On définit une échelle de 1 à 5 pour la note:
    const range = [1,2,3,4,5];

    return (
        <div>
            {range.map((rangeStar) => 
                ratingNumber >= rangeStar ? <img key={rangeStar.toString()} src={pinkStar} alt="filled star" className="star"/> : <img src={lightPinkStar} alt="empty star" className="star" />     
            )}
        </div>
    );
}

export default Rate