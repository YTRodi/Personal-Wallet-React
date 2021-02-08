import React from 'react';
import { useSelector } from 'react-redux';
import { BalanceCard } from './BalanceCard';
import { OperationCard } from './OperationCard';

export const Panel = () => {
	const { data } = useSelector((state) => state.operation);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					// border: '1px solid black',
					paddingTop: '20px',
					display: 'flex',
					justifyContent: 'flex-start',
				}}
			>
				<BalanceCard />
			</div>

			<div
				style={{
					// border: '1px solid black',
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-evenly',
					paddingTop: '50px',
					maxWidth: '1400px',
				}}
			>
				{data
					.map((op, index) => (
						<OperationCard
							key={index}
							id={op.id}
							amount={op.amount}
							creation={op.creation}
							concept={op.concept}
							type={op.type}
						/>
					))
					.sort((a, b) => {
						// Ordeno el array, de mayor a menor
						const { id: idA } = a.props;
						const { id: idB } = b.props;

						return idB - idA;
					})
					.slice(0, 10)}
			</div>
		</div>
	);
};
