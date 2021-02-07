import moment from 'moment';

// Parse property 'creation' to Date.
export const prepareOperations = (operations) => {
	return operations.map((operation) => ({
		...operation,
		creation: moment(operation.creation).toDate(),
	}));
};
