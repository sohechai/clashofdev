import React from 'react';

const CardJudge = ({ judges, color }) => {
	const judgeList = judges.split(',');
	const fillcolor = `var(--${color}-mid)`;

	return (
		<div className="card-judge">
			{judgeList.map((judge, index) => (
				<>
					<span className="card-judge-icon" key={index}>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M5.82543 14L4.08728 2.89037L14 8.21918L8.94181 9.7397L5.82543 14Z" fill={fillcolor} />
						</svg>
					</span>
					<span className="card-judge-name" style={{ border: `2px solid var(--${color}-dark)`, backgroundColor: `var(--${color}-mid)` }} key={index + 1}>@{judge}</span>
				</>
			))}
		</div>
	);
};

export default CardJudge;
