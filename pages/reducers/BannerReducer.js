import {
	BANNER_FETCH
} from '../actions/types'

const INITIAL_STATE = {
	banners: []
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case BANNER_FETCH:
			return { ...state, banners: action.payload }

		default:
			return state
	}
}