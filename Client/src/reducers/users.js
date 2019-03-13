import {combineReducers} from 'redux'
import { handleActions, handleAction } from 'redux-actions'

import {
    GET_USERS
} from '../actions/types'

const usersDefaultState = { list: null }

const users = handleActions({
    [GET_USERS]: {
        next(state, action) {
          console.log(action.payload)
            if (action.payload) {
                return { list: action.payload }
            }
            return { list: state.users }
        },
        throw(state, action) {
            console.log(`Error fetching users: ${action.error}`)
            return { list: state.users }
        }
    }
}, usersDefaultState);

export default combineReducers({ users })
