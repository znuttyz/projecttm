import { combineReducers } from 'redux'
import BannerReducer from './BannerReducer'

export default combineReducers({
	banner: BannerReducer
});