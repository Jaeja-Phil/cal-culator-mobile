/* eslint-disable indent */
import * as actionTypes from '../actions';

const initialState = {
	isLogin: false,
	userId: '',
	userEmail: '',
	userName: '',
	userAge: '',
	userGender: '',
	userWeight: '',
	userHeight: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOGIN:
			return {
				...state,
				isLogin: true,
			};
		case actionTypes.LOGOUT:
			return {
				...state,
				isLogin: false,
				userId: '',
				userEmail: '',
				userName: '',
				userAge: '',
				userGender: '',
				userWeight: '',
				userHeight: '',
			};
		case actionTypes.USER:
			return {
				...state,
				userId: action.payload.id,
				userEmail: action.payload.email,
				userName: action.payload.name,
				userAge: action.payload.age,
				userGender: action.payload.gender,
				userWeight: action.payload.weight,
				userHeight: action.payload.height,
			};
		default:
			return state;
	}
};

export default reducer;
