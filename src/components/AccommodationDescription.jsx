import Tag from "./Tag";
import Rate from "./Rate";
import Collapse from "./Collapse";

function AccommodationDescription(props) {

    //On récupère le tableau d'équipments du logement :
    const arrayOfEquipments = props.equipments;


    //On affiche le collapse d'équipments avec saut de ligne, 
    //en prenant comme clé la combinaison entre l'index et le nom des équipements :
    const equimentsWithBr = arrayOfEquipments.map((equipment, index) => (

        <p key={`${equipment}-${index}`} className="collapseAccommodation__p">{equipment}</p>

    ));

    //On récupère le tableau de tags du logement :
    const arrayOfTags = props.tag;

    //On affiche les tags, en prenant comme clé la combinaison entre l'index et le nom des tags :
    const tags = arrayOfTags.map((tags, index) => (

        <Tag key={`${tags}-${index}`} tag={tags}/>

    )); 
    

    return (
        <section className='accommodationDescription'>
           
            <div className="accommodationDescription__blocTitleTagHostRate">
                <div className="accommodationDescription__titleLocationTag">
                    <p className="accommodationDescription__titleLocationTag__title">{props.title}</p>
                    <p className="accommodationDescription__titleLocationTag__location">{props.location}</p>
                    <div className="accommodationDescription__titleLocationTag__tags">{tags}</div>
                </div>

                <div className="accommodationDescription__blocHostRate">
                    <div className="accommodationDescription__blocHostRate__host">
                        <p className="accommodationDescription__blocHostRate__host__name">{props.name}</p>
                        <img className="accommodationDescription__blocHostRate__host__picture" src={props.picture} alt="host"/>
                    </div>
                    <div className="accommodationDescription__blocHostRate__rate">
                        <Rate ratingNumber={props.rate}/>
                    </div>
                </div>
            </div>

            <div className="accommodationDescription__collapse">
                <Collapse collapseTitle="Description" collapseContents={props.description}/>
                <Collapse collapseTitle="&Eacute;quipements" collapseContents={equimentsWithBr}/>
            </div>

        </section>
    );
}

export default AccommodationDescription