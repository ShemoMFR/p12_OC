/* Librairies */
import React, {useState, useEffect} from 'react'; 
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

/* Components */ 
/* import { getUserActivity } from '../../service/Api';
 */
/* CSS */
import './Activites.css';
import '../../style.css';

function Activites(props) {

    /* const [userActivity, setUserActivity] = useState([]);

    useEffect(() => {
        getUserActivity().then(datas => setUserActivity(datas.data.sessions));
        console.log(props.data)
    }, []) */

    return (
        <div className='activites'>
            <div className='headerActivites'>
				<h2>Activité quotidienne</h2>
				<div className='dotContainer'>
					<div className='units'>
						<div className='dotActivites' style={{color:'#282D30'}}>.</div>
						<div className='txtActivites'>Poids (kg)</div>
					</div>
					<div className='units'>
						<div className='dotActivites' style={{color:'#E60000'}}>.</div>
						<div className='txtActivites'>Calories brûlées (kCal)</div>
					</div>
				</div>
			</div> 
            
            <ResponsiveContainer width="100%" height="80%">
            <BarChart
                margin={{
                    top: 50,
                }}
                data={props.data}
                barGap={7}
                barCategoryGap={1}
            >
            <CartesianGrid vertical={false} strokeDasharray='2 2' />
            <XAxis dataKey="day" axisLine={false} tickLine={false}  />
            <YAxis yAxisId='right'
                    datakey='kilogram'
                    hide={true}
                    domain={[60, 70]} />
            <YAxis yAxisId='left'
                    datakey='kilogram'
                    orientation='right'
                    domain={[60, 70]}
                    tickCount={4}
                    axisLine={false}
                    tickLine={false}
            />
            <Tooltip />
            <Bar yAxisId='left'
                    dataKey='kilogram'
                    fill='#282D30'
                    barSize={7}
                    radius={[50, 50, 0, 0]} 
            />
            <Bar yAxisId='right'
                    dataKey='calories'
                    fill='#E60000'
                    barSize={7}
                    radius={[50, 50, 0, 0]}
            />
            </BarChart>
            </ResponsiveContainer> 
            
        </div>           
    )
}

export default Activites; 




