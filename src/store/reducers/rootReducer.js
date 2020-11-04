import listingReducer from './listingReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    listing: listingReducer,
})

export default rootReducer