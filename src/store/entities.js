import { combineReducers } from 'redux'
import cartSlice from '../store/cartSlice'

export default combineReducers({
    books:cartSlice,
})

