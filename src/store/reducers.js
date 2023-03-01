import { combineReducers } from 'redux'
import bookSlice from './booksSlice'
import newsPaperSlice from './newsPaperSlice'
import docuementoriesSlice from './documentoriesSlice'


export default combineReducers({
    books : bookSlice,
    newsPaper:newsPaperSlice,
    documentories:docuementoriesSlice
  })

