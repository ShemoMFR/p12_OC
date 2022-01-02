/* Librairies */
import React from 'react';

/* CSS */
import './Navbar.css';
import '../../style.css';

/* logo */
import Logo from '../../images/logo.png';
import Logo2 from '../../images/logo2.png';

function Navbar() {
    return (
        <div className='containerNavbar'>
            <div className='logo'>
                <img src={Logo2} alt='logo SportSee' />
                <img src={Logo} style={{marginLeft: '10px'}}alt='logo SportSee' />
            </div>
            <nav className='navbar'>
                <div>Accueil</div>
                <div>Profil</div>
                <div>Réglages</div>
                <div>Communauté</div>
            </nav>
        </div>
    )
}

export default Navbar
