/* Librairies */
import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

/* CSS */
import './Score.css';
import '../../style.css';


function Score(props) {

	const pieData = [
		{ name: "completed", value: props.data && props.data, fillColor: "#FF0000" },
		{ name: "not-completed", value: 1 - props.data && props.data, fillColor: "transparent" },
	  ];
	
	return (

		<div className='containerScore'>		
      		<h2>Score</h2>
			  <div className='innerCircle' />

				<ResponsiveContainer width="100%" height="100%">
					<PieChart width={160} height={160}>
					<Pie
						data={pieData}
						dataKey="value"
						innerRadius={70}
						outerRadius={80}
						startAngle={90}
						endAngle={200}
					>

						
						{pieData.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={entry.fillColor}
							cornerRadius="50%"
						/>
						))}
					</Pie>
					</PieChart>
				</ResponsiveContainer>

				<div className='objective'>
					<span>{props.data && props.data * 100}%</span> <br /> de votre <br />
 					de votre objectif
				</div> 
            
		</div>
	);
}

Score.propTypes = {  
    data: PropTypes.number
};

export default Score;