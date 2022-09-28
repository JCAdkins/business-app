import axios from 'axios'
import toPairs from 'lodash/toPairs'
<<<<<<< HEAD
const COMPANY_ROOT = 'http://localhost:8080'

export const request = async (url, options) => {
  console.log("options", options)
  const response = await fetch(url, options)
  // if (!response.ok) {
	// 	throw new Error(`HTTP error! status: ${response.status}`);
	// }
  const data = await response.json()
    return data
   
  }
=======
const COMPANY_ROOT = 'http://localhost:8080/'


// export const request = async (url, options) => {
//   console.log("request", url)
//   const response = await fetch(url, options)
//   const data = await response.json()
//     return data
   
//   }

// const fetchFromCompany = ({ token, endpoint, params, body }) => {
//     let url = [COMPANY_ROOT, endpoint].join('/')
//     if (params) {
//       const paramString = toPairs(params)
//         .map(param => param.join('='))
//         .join('&')
//       url += `?${paramString}`
//     }
//     const options = { body: body, headers: { Authorization: `Bearer ${token}` } }
//     console.log("API>>>",url)
//     return request(url, options)
//   }
>>>>>>> 7a06208b15baeb16e889d86c608b5c4842cdf8c4

export const fetchFromCompany = async ({ endpoint, method, body }) => {
console.log('url',`${COMPANY_ROOT}${endpoint}` )
  try {
    const options = {
      method: method ? method.toUpperCase() : "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    console.log('options',options)
    const respObject = await fetch(`${COMPANY_ROOT}${endpoint}`, options);
    
    const data = await respObject.json();
   
    if (data.error) {
      throw data.error;
    }
    console.log("data from api", data)
    return data;
  } catch (error) {
    console.error(error);
  }
};
  
  export default fetchFromCompany
