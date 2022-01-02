/* Librairies */
import React, {useEffect, useState} from 'react'; 

/* Service */
import { getUserDatas } from '../../service/Api';

/* CSS */
import './Nutriments.css';
import '../../style.css';

/* icons */
import energy from '../../images/calories-icon.png'
import protein from '../../images/protein-icon.png'
import fat from '../../images/fat-icon.png'
import carbs from '../../images/carbs-icon.png'

function Nutriments() {

    const [userDatas, setUserDatas] = useState('');

    useEffect(() => {
        getUserDatas().then(datas => setUserDatas(datas));
   }, []);

    return (
        <div className='containerNutriments'>
            <div className="card">
                <div>
                    <img src={energy} className='icon' alt='' />
                </div>
                <div className='containerTxt'>
                    <div className='value'>{userDatas.data?.keyData.calorieCount}</div>
                    <div className='txtValue'>Calories</div>
                </div>
            </div>
            <div className="card">
                <div style={{margin: '0', padding: '0'}}>
                    <img src={protein} className='icon' alt='' />
                </div>
                <div className='containerTxt'>
                    <div className='value'>{userDatas.data?.keyData.proteinCount}</div>
                    <div className='txtValue'>Protéines</div>
                </div>
            </div>
            <div className="card">
                <div style={{margin: '0', padding: '0'}}>
                    <img src={carbs} className='icon' alt='' />
                </div>
                <div className='containerTxt'>
                    <div className='value'>{userDatas.data?.keyData.carbohydrateCount}</div>
                    <div className='txtValue'>Glucides</div>
                </div>
            </div>
            <div className="card">
                <div style={{margin: '0', padding: '0'}}>
                    <img src={fat} className='icon' alt='' />
                </div>
                <div className='containerTxt'>
                    <div className='value'>{userDatas.data?.keyData.lipidCount}</div>
                    <div className='txtValue'>Lipides</div>
                </div>
            </div>
        </div>
    )
}

export default Nutriments;
