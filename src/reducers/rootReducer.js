import { combineReducers } from 'redux';
import { operationReducer } from './operationReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
	ui: uiReducer,
	operation: operationReducer,
});
