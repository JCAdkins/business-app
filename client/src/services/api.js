import toPairs from "lodash/toPairs";
const COMPANY_ROOT = "http://localhost:8080/";

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

export const fetchFromCompany = async ({ endpoint, method, body }) => {
  console.log("url", `${COMPANY_ROOT}${endpoint}`);
  try {
    const options = {
      method: method ? method.toUpperCase() : "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    console.log("options", options);
    const respObject = await fetch(`${COMPANY_ROOT}${endpoint}`, options);

    const data = await respObject.json();

    if (data.error) {
      throw data.error;
    }
    console.log("data from api", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchFromCompany;
