/* Librairies */
import React, {useEffect, useState} from 'react'; 
import {ResponsiveContainer, LineChart, XAxis, Tooltip, Line, YAxis} from 'recharts';

/* Service */
import {getUserAverageSessions} from '../../service/Api';

/* CSS */
import './Sessions.css';
import '../../style.css';

function Sessions(props) {

    const [userAverageSessions, setUserAverageSessions] = useState([]);

    useEffect(() => {
        getUserAverageSessions().then(datas => setUserAverageSessions(datas));     
        userAverageSessions && console.log(userAverageSessions) 
    }, [])

    function CustomTooltip({active, payload }) {
        if (active && payload) {
            return <div className='tooltipContainer'>{`${payload[0].value} min`}</div>;
        }
      
        return null;
    }

    return (
        <div className='container'>
            <h1 className='title'>Durée moyenne des sessions</h1>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={userAverageSessions.data?.sessions}
                    outerRadius="75%"
                    margin={{ top: 0, right: 12, bottom: 24, left: 12 }}
                >
                <XAxis
                    dataKey="day"
                    stroke="rgba(255, 255, 255, 0.6)"
                    axisLine={false}
                    dy={10}
                    tickLine={false}
                    tick={{
                    fontSize: 12,
                    fontWeight: 500,
                    }}
                />
                <YAxis
                    dataKey="sessionLength"
                    domain={[0, "dataMax + 60"]}
                    hide={true}
                />
                <Line
                    dataKey="sessionLength"
                    type='monotone'
                    stroke="rgba(255, 255, 255, 0.6)"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{
                    stroke: "rgba(255,255,255, 0.6)",
                    strokeWidth: 10,
                    r: 5,
                    }}
                />
                <Tooltip
                    content={<CustomTooltip />}
                    cursor={{
                    stroke: "rgba(0, 0, 0, 0.1)",
                    strokeWidth: 32,
                    }}
                />
                </LineChart>
            </ResponsiveContainer>
      
        </div>
    )
}


export default Sessions

