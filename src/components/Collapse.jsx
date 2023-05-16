import React, { useState } from 'react';
import VectorDown from '../assets/VectorDown.svg';
import VectorUp from '../assets/VectorUp.svg';

function Collapse({collapseTitle, collapseContent}) {

    //On crée une variable isOpen associée avec la fonction setIsOpen
    //et on l'initiale à false avec useState:
    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        
        //Lorsque isOpen est vrai, on affiche le contenu et on change le vector en up:
        <section className='collapse'>
            <div className="collapse__dropdown">
                <p>{collapseTitle}</p>
                {/*et lorsqu'on clique sur le vector up on passe le isOpen à faux :*/}
                <div onClick={() => { setIsOpen(false) }}><img src={VectorUp} alt="vector up"/></div>
            </div>
            <div className='collapse__dropdownOpen'>{collapseContent}</div>
        </section>

    ) : ( 

        //Lorsque isOpen est faux, on cache le contenu et on change le vector en down. 
        <section className='collapse'>
            <div className="collapse__dropdown">
                <p>{collapseTitle}</p>
                {/*et lorsqu'on clique sur le vector down on passe le isOpen à vrai :*/}
                <div onClick={() => { setIsOpen(true) }}><img src={VectorDown} alt="vector down"/></div>
            </div>
        </section>

    )

}

export default Collapse