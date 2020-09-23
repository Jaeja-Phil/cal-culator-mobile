/* eslint-disable indent */
import * as actionTypes from '../actions';

const initialState = {
	isLogin: false,
	userId: '5f4a4b1a5668613a24e4e744',
	userAge: 26,
	userGender: 'Male',
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
			};
		case actionTypes.USER:
			return {
				...state,
				userId: action.payload.userId,
				userAge: action.payload.age,
				userGender: action.payload.gender,
			};
		default:
			return state;
	}
};

export default reducer;
