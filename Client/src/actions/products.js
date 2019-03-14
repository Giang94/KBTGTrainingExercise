import {
    GET_PRODUCTS
} from './types'

import { createAction } from 'redux-actions'

export const getProducts = createAction(GET_PRODUCTS)
const productAPI = 'http://93a591e4.ngrok.io/api/product/'
import 'whatwg-fetch'

function handleErrors(response) {
  if (!response.ok) {
    Promise.reject(response.statusText);
  }
  return response;
}

export function excuteGetProducts(filterParameters){
    (filterParameters !== '') ? filterParameters: ''
    const filterUrl = productAPI + filterParameters
    const headers = {
      method: 'GET',
      'Content-Type': 'application/json'
    }

    return fetch(filterUrl, headers).then(response => {
        if (response.ok) {
            return response.json().then(result => {
                return result.data
            })
        }
        return Promise.reject(new Error('Error getting products'))

    })
    .catch(error => {
        return Promise.reject(error)
    });
}

export function excuteGetProductDetail(productId){
    const filterUrl = productAPI + productId
    const headers = {
      method: 'GET',
      'Content-Type': 'application/json'
    }

    return fetch(filterUrl, headers).then(response => {
        if (response.ok) {
            return response.json().then(result => {
                return result.data
            })
        }
        return Promise.reject(new Error('Error getting products'))

    })
    .catch(error => {
        return Promise.reject(error)
    });
}
