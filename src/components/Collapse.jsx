import React, { useState } from 'react';
import VectorDown from '../assets/VectorDown.svg';
import VectorUp from '../assets/VectorUp.svg';

function Collapse({collapseTitle, collapseContents}) {

    //On crée une variable isOpen associée avec la fonction setIsOpen
    //et on l'initiale à false avec useState:
    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        
        //Lorsque isOpen est vrai, on affiche le contenu et on change le vector en up:
        <div className='collapse'>
            <div className="collapse__dropdown"onClick={() => { setIsOpen(false) }}>
                <p>{collapseTitle}</p>
                {/*et lorsqu'on clique sur le vector up on passe le isOpen à faux :*/}
                <img src={VectorUp} alt="close"/>
            </div>
            <div className='collapse__dropdownOpen'>{collapseContents}</div>
        </div>

    ) : ( 

        //Lorsque isOpen est faux, on cache le contenu et on change le vector en down. 
        <div className='collapse'>
            <div className="collapse__dropdown" onClick={() => { setIsOpen(true) }}>
                <p>{collapseTitle}</p>
                {/*et lorsqu'on clique sur le vector down on passe le isOpen à vrai :*/}
                <img src={VectorDown} alt="open"/>
            </div>
        </div>

    )

}

export default Collapse