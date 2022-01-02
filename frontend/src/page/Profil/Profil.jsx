/* Librairies */
import React, { useEffect, useState } from 'react'

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
import { getUserActivity, getUserAverageSessions, getUserPerformance } from '../../service/Api';

function Profil() {
    const [userPerformance, setUserPerformance] = useState('');
    const [userActivity, setUserActivity] = useState('');
    const [userAverageSessions, setUserAverageSessions] = useState('');

    useEffect(() => {
        getUserPerformance().then(datas => setUserPerformance(datas));
        getUserActivity().then(datas => setUserActivity(datas));
        getUserAverageSessions().then(datas => setUserAverageSessions(datas));        
   }, [])

    
    return (
        <div className='containerProfil'>
            <Navbar />
            <div className='containerSideNav'>
                <Navside />
                <div className='containerHeader'>
                    <Header />
                    <div className='containerActivites'>
                            <div style={{display: 'flex', flexDirection:'column'}}>
                                <Activites />
                                <div>
                                    <Sessions />
                                    <Performances />
                                    <Score />
                                </div>
                            </div>
                        <Nutriments />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profil;
