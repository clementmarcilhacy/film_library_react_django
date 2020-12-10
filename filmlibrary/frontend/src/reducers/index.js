import { combineReducers } from 'redux'
import films from './films'
import errors from './errors'
import messages from './messages'
import auth from './auth'

export default combineReducers({
  films,
  errors,
  messages,
  auth,
})
