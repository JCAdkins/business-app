import toPairs from 'lodash/toPairs'
const COMPANY_ROOT = 'https://localhost:8080'

const parseJSON = response => {
    if (response.status === 204 || response.status === 205) {
      return null
    }
    return response.json()
  }

const checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
      return response
    }
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }

export const request = (url, options) => {
    return fetch(url, options)
      .then(checkStatus)
      .then(parseJSON)
  }

const fetchFromCompany = ({ token, endpoint, params }) => {
    let url = [COMPANY_ROOT, endpoint].join('/')
    if (params) {
      const paramString = toPairs(params)
        .map(param => param.join('='))
        .join('&')
      url += `?${paramString}`
    }
    const options = { headers: { Authorization: `Bearer ${token}` } }
    console.log("API>>>",url)
    return request(url, options)
  }
  
  export default fetchFromCompany