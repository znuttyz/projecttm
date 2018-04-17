import axios from 'axios'

import {
	BANNER_FETCH
} from './types'

export const bannerFetch = () => {
	return(dispatch) => {
		dispatch({ type: BANNER_FETCH, payload: ["banner1", "banner2"] })
	}
}