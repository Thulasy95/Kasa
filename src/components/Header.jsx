import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Header() {
    return (
        <header className='header'>
            <img src={logo} alt="logo Kasa"/>
            <nav className='nav'>
                <Link to="/" className='nav__link'>Accueil</Link>
                <Link to="/About" className='nav__link'>A Propos</Link>
            </nav>
        </header>
    );
}

export default Header