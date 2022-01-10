/* Librairies */
import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";

/* CSS */ 
import './Profil.css';

/* components */
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Navside from '../../components/Navside/Navside';
import Nutriments from '../../components/Nutriments/Nutriments';
import Activites from '../../components/Activites/Activites';
import Sessions from '../../components/Sessions/Sessions';
import Performances from '../../components/Performances/Performances';
import Score from '../../components/Score/Score';

/* Service */
import { getUserDatas, getUserActivity, getUserAverageSessions, getUserPerformance } from '../../service/Api';

function Profil() {

    const {id} = useParams();

    const [userDatas, setUserDatas] = useState('');
    const [userActivity, setUserActivity] = useState([]);
    const [userAverageSessions, setUserAverageSessions] = useState([]);
    const [userPerformance, setUserPerformance] = useState('');

    useEffect(() => {
        getUserDatas(id).then(datas => setUserDatas(datas)); 
        getUserActivity(id).then(datas => setUserActivity(datas.data.sessions));
        getUserAverageSessions(id).then(datas => setUserAverageSessions(datas.data.sessions));    
        getUserPerformance(id).then(datas => setUserPerformance(datas));
   }, []);
    
    return (
        <div className='containerProfil'>
            <Navbar />
            <div className='containerSideNav'>
                <Navside />
                <div className='containerHeader'>
                    {userDatas && <Header data={userDatas.data.userInfos} /> }
                    <div className='containerActivites'>
                            <div style={{display: 'flex', flexDirection:'column'}}>
                                <Activites data={userActivity}/> 
                                <div className='containerGrahs'>
                                    <Sessions data={userAverageSessions}/> 
                                    { userPerformance && <Performances data={userPerformance.data.data} kind={userPerformance.data.kind} /> }
                                    { userDatas && <Score data={userDatas.data.score} /> }
                                </div>
                            </div>
                        <Nutriments data={userDatas} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profil;
