import toPairs from 'lodash/toPairs'
const COMPANY_ROOT = 'http://localhost:8080'


export const request = async (url, options) => {
  console.log("request", url)
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
    console.log("API>>>",url)
    return request(url, options)
  }
  
  export default fetchFromCompany