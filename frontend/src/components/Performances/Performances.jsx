/* Librairies */
import React, { useState, useEffect } from 'react';
import {RadarChart, PolarGrid, Radar, PolarAngleAxis, ResponsiveContainer} from 'recharts';

/* Service */
import { getUserPerformance } from '../../service/Api';

/* CSS */
import './Performances.css';
import '../../style.css';

function Performances(props) {
    let datas = [];
    const [userPerformance, setUserPerformance] = useState('');

    useEffect(() => {
        getUserPerformance().then(datas => setUserPerformance(datas));
        //userPerformance && console.log(userPerformance.data.data)          
    }, [])

    function buildObjectDatas() {
        
        let categories = [];
        let values = [];

        userPerformance && Object.keys(userPerformance.data.kind).map((keyName, keyIndex) => {
            categories.push(userPerformance.data.kind[keyName])
        })
        
        userPerformance && userPerformance.data.data.map((value, index) => {
            values.push(value.value);
            datas.push({kind: categories[index], value: value.value})
        })

    }

    buildObjectDatas();
        
    return (
        <div className='containerPerf'>
            <ResponsiveContainer width='100%' height='100%'>
				<RadarChart cx='50%' cy='50%' outerRadius='60%' data={datas}>
					<PolarGrid />
					<PolarAngleAxis
						dataKey='kind'
						stroke='white'
						tickLine={false}
						tick={{ fontSize: 11 }}
					/>
					<Radar
						dataKey='value'
						stroke='#FF0101'
						fill='#FF0101'
						fillOpacity={0.7}
					/>
				</RadarChart>
			</ResponsiveContainer>
        </div>
    )
}

export default Performances;



	
			

