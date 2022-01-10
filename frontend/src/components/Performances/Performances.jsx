/* Librairies */
import React from 'react';
import PropTypes from 'prop-types';
import {RadarChart, PolarGrid, Radar, PolarAngleAxis, ResponsiveContainer} from 'recharts';

/* CSS */
import './Performances.css';
import '../../style.css';

function Performances(props) {
    let datas = [];

    function buildObjectDatas() {
        
        let categories = [];
        let values = [];

        props.data && Object.keys(props.kind).map((keyName, keyIndex) => {
            categories.push(props.kind[keyName])
        })
        
        props.data && props.data.map((value, index) => {
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

Performance.propTypes = {  
    data: PropTypes.arrayOf(PropTypes.shape({
        kind: PropTypes.number,
        value: PropTypes.number,
    })),
    kind: PropTypes.object
};


export default Performances;



	
			

