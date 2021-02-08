import React from 'react';

export const Empty = () => {
	return (
		<h1 style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
			<span>Empty Operations</span>
			<img
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Feather-arrows-arrow-down-right.svg/1024px-Feather-arrows-arrow-down-right.svg.png'
				alt='Homero '
				width='300px'
			/>
			<span>¡Try adding one!</span>
		</h1>
	);
};
