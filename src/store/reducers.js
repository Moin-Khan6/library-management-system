import { combineReducers } from 'redux'
import bookSlice from './booksSlice'
import newsPaperSlice from './newsPaperSlice'

export default combineReducers({
    books : bookSlice,
    newsPaper:newsPaperSlice
  })

