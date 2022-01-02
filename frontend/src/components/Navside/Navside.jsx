/* Librairies */
import React from 'react'; 

/* CSS */
import "./Navside.css"; 
import '../../style.css';

/* Icons */ 
import Icon1 from '../../images/icon1.png';
import Icon2 from '../../images/icon2.png';
import Icon3 from '../../images/icon3.png';
import Icon4 from '../../images/icon4.png';

function Navside() {
    return (
        <div className='containerNavSide'>
            <div className='containerIcons'>
                <div className="icon">
                    <img src={Icon1} alt='icon' />
                </div>
                <div className="icon">
                    <img src={Icon2} alt='icon' />
                </div>
                <div className="icon">
                    <img src={Icon3} alt='icon' />
                </div>
                <div className="icon">
                    <img src={Icon4} alt='icon' />
                </div>
            </div>
            <div className='copyright'>Copiryght, SportSee 2020</div>
        </div>
    )
}

export default Navside
