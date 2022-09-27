import toPairs from 'lodash/toPairs'
const COMPANY_ROOT = 'https://localhost:8080'

export const request = async (url, options) => {
  const response = await fetch(url, options)
  const data = await response.json()
    return data
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
    return request(url, options)
  }

  export default fetchFromCompany
