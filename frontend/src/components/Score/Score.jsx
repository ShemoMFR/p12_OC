/* Librairies */
import React, {useState, useEffect} from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

/* Service */
import {getUserDatas} from '../../service/Api';

/* CSS */
import './Score.css';
import '../../style.css';


function Score() {

    const [userScore, setScore] = useState([]);

	const pieData = [
		{ name: "completed", value: userScore && userScore.score, fillColor: "#FF0000" },
		{ name: "not-completed", value: 1 - userScore && userScore.score, fillColor: "transparent" },
	  ];

    useEffect(() => {
        getUserDatas().then(datas => setScore(datas.data))
		
   }, []);
	
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
					<span>{userScore && userScore.score * 100}%</span> <br /> de votre <br />
 					de votre objectif
				</div> 
            
		</div>
	);
}

export default Score;