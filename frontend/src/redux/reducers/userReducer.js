import {
	USER_SIGNIN_REQUEST,
	USER_SIGNIN_SUCCESS,
	USER_SIGNIN_FAILURE,
	USER_SIGNOUT,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAILURE,
	USER_DETAILS_SUCCESS,
	USER_DETAILS_FAILURE,
	USER_DETAILS_REQUEST
} from '../constants/userConstant';

export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_REGISTER_REQUEST:
			return {
				...state,
				loading: true
			};

		case USER_REGISTER_SUCCESS:
			return {
				...state,
				loading: false,
				userInfo: action.payload
			};

		case USER_REGISTER_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};

		default:
			return state;
	}
};

/******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

export const userSignInReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_SIGNIN_REQUEST:
			return {
				...state,
				loading: true
			};

		case USER_SIGNIN_SUCCESS:
			return {
				...state,
				loading: false,
				userInfo: action.payload
			};

		case USER_SIGNIN_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};

		case USER_SIGNOUT:
			return {};

		default:
			return state;
	}
};

/******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

export const userDetailsReducer = (state = { loading: true }, action) => {
	switch (action.type) {
		case USER_DETAILS_REQUEST:
			return {
				...state,
				loading: true
			};

		case USER_DETAILS_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.payload
			};

		case USER_DETAILS_FAILURE:
			return {
				...state,
				error: action.payload
			};

		default:
			return state;
	}
};
