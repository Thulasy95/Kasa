import logo from '../assets/logo_footer.svg';

function Footer() {
    return (
        <footer className='footer'>
            <img src={logo} alt="logo Kasa blanc"/>
            <p>&#169; 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer