import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import imgAPropos from '../../assets/imgAPropos.png';
import aProposContents from "../../datas/aProposContents.json";


//On affiche les collapses avec le contenu du tableau aProposContents en utilisant l'id comme clé :
const aProposCollapse = aProposContents.map((props) => (
    <Collapse 
        key={props.id} 
        collapseTitle={props.title}
        collapseContent={props.content}
    />
));


function APropos() {
    return (
        <main>
            <Banner image={imgAPropos} text=""/>
            <section className='collapseAPropos'>{aProposCollapse}</section>
        </main>
    );
}

export default APropos