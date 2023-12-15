import {createStore} from 'redux'
import {combineReducers} from 'redux'
import {reducer} from "./Reducer"
const rootReducer = combineReducers({count:reducer})

export const store = createStore(rootReducer);