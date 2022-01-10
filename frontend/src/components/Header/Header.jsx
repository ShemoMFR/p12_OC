/* librairies */
import React from 'react'
import PropTypes from 'prop-types';

/* css */
import './Header.css';
import '../../style.css';

function Header(props) { 

    return (
        <div className='containerHeader'>
            <h1 className='profilHeader'>Bonjour <span style={{color: "red"}}>{props.data && props.data.firstName}</span></h1>
            <h2 className='profilHeaderSub'>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>
    )
}

Header.propTypes = {  
    data: PropTypes.shape({
        age: PropTypes.number,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string
    })
};



export default Header;