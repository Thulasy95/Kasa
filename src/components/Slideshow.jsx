import { useState } from "react";
import vectorLeft from "../assets/VectorLeft.svg";
import vectorRight from "../assets/VectorRight.svg";


function Slideshow(props) {

    //On récupère le tableau de pictures du logement :
    const arrayOfPictures = props.pictures;

    //on initiale la première image affiché dans Slideshow avec l'image de l'index 0 de arrayOfPictures :
    const [pictureIndex, updatePictureIndex] = useState(0);

    //On définit pictureIndexMax comme l'index max du tableau :
    const pictureIndexMax = arrayOfPictures.length;

    //Si on est à la dernière image du tableau et qu'on clique sur la flèche droite alors on repasse à la première image :
    const clickNextPicture = () => {(pictureIndex + 1) === pictureIndexMax ? updatePictureIndex(0) : updatePictureIndex(pictureIndex + 1);}

    //Si on est à la première image du tableau et qu'on clique sur la flèche gauche alors on repasse à la dernière image :
    const clickPreviousPicture = () => {pictureIndex === 0 ? updatePictureIndex(pictureIndexMax -1) : updatePictureIndex(pictureIndex - 1);}
    
    return (
        
        //Si isOnePicture est vrai alors on enlève les flèches et le bullet point :
        <section className='slideshow'>

            <img src={arrayOfPictures[pictureIndex]} alt="accommodations" className="slideshow__picture"/>
            <div className="slideshow__darken"></div>

            {pictureIndexMax > 1 && (

                <div>
                    <p className="slideshow__bulletPoint">{pictureIndex+1}/{pictureIndexMax}</p>
                    <div onClick={clickPreviousPicture}><img src={vectorLeft} alt="previous" className="slideshow__vectorLeft"/></div>
                    <div onClick={clickNextPicture}><img src={vectorRight} alt="next" className="slideshow__vectorRight"/></div>
                </div>

            )}

        </section>
    );
}

export default Slideshow