import {
    GET_USERS
} from './types'

import { createAction } from 'redux-actions'

export const getUsers = createAction(GET_USERS)

export const excuteGetUsers = () => (dispatch, getState) => {
    const usersUrl = 'https://jsonplaceholder.typicode.com/users'
    const headers = {
      method: 'GET'
    }
    dispatch(getUsers())
    return fetch(usersUrl, headers).then(response => {
      console.log(response)
    })
}
