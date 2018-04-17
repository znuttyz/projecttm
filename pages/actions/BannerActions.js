import axios from 'axios'

import {
	BANNER_FETCH
} from './types'

export const bannerFetch = () => {
	return(dispatch) => {
		axios.post('/getBanner')
		.then((response) => dispatch({ type: BANNER_FETCH, payload: response.data }))
		.catch((response) => console.log('Unable to fetch Banner.', response));
	}
}