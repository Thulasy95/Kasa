import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import imgAbout from '../../assets/imgAbout.png';
import aboutContents from "../../datas/aboutContents.json";


//On affiche les collapses avec le contenu du tableau aProposContents en utilisant l'id comme clé :
const aboutCollapse = aboutContents.map((props) => (
    <Collapse 
        key={props.id} 
        collapseTitle={props.title}
        collapseContents={props.content}
    />
));


function About() {
    return (
        <main>
            <Banner image={imgAbout} text=""/>
            <section className='collapseAbout'>{aboutCollapse}</section>
        </main>
    );
}

export default About