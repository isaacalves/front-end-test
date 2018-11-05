// import request from './request'
// const getEmployees = () => request(`${REACT_APP_REWARD_GATEWAY_API_BASE_URL}/list``)

let base64 = require('base-64');

const headers = new Headers();
headers.append('Authorization', 'Basic ' + base64.encode(process.env.REACT_APP_REWARD_GATEWAY_API_USERNAME + ":" + process.env.REACT_APP_REWARD_GATEWAY_API_PASSWORD));

const getEmployees = () => fetch(`${REACT_APP_REWARD_GATEWAY_API_BASE_URL}/list`, { method: 'GET', headers: headers})

export { getEmployees }