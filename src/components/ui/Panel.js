import React from 'react';
import { useSelector } from 'react-redux';
import { useStylesPanel } from '../../styles/ui';
import { BalanceCard } from './BalanceCard';
import { OperationCard } from './OperationCard';

export const Panel = () => {
	const classes = useStylesPanel();
	const { data } = useSelector((state) => state.operation);

	return (
		<div style={classes.divContainer}>
			<div style={classes.divBalance}>
				<BalanceCard />
			</div>

			<div style={classes.divCards}>
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
