/* librairies */
import React, {useEffect, useState} from 'react'

/* css */
import './Header.css';
import '../../style.css';

/* Service */
import { getUserDatas } from '../../service/Api';

function Header() { 

    const [userDatas, setUserDatas] = useState('');

    useEffect(() => {
        getUserDatas().then(datas => setUserDatas(datas)); 
   }, []);

    return (
        <div className='containerHeader'>
            <h1 className='profilHeader'>Bonjour <span style={{color: "red"}}>{userDatas && userDatas.data.userInfos.lastName}</span></h1>
            <h2 className='profilHeaderSub'>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>
    )
}

export default Header;