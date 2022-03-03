/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */

import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import apiObj from '../config/api.service';

const api = apiObj.url;

// Function that will be called to refresh authorization
const refreshAuthLogic = (failedRequest) => axios.post(`${api}/users/refresh`, {
  refreshToken: JSON.parse(localStorage.getItem('refreshToken')),
}).then(tokenRefreshResponse => {
  localStorage.setItem('idToken', JSON.stringify(tokenRefreshResponse.data.data.IdToken));
  // added token expiry, when refreshed
  localStorage.setItem('tokenExpiry', JSON.stringify(new Date().getTime()));
  failedRequest.headers.Authorization = tokenRefreshResponse.data.data.IdToken;
  return Promise.resolve();
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    const tokenExpiry = localStorage.getItem('tokenExpiry');
    const currentTime = new Date().getTime();
    if(tokenExpiry) {
        const tokenExpired = ((tokenExpiry - currentTime) / 60000) <= 5;
        if(tokenExpired) {
            refreshAuthLogic(config);
        }
    }
    else {
        refreshAuthLogic(config);
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    const originalRequest = error.config;
    if(error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return refreshAuthLogic(error.response.config);
    }
    return Promise.reject(error);
  });

export const fetchToken = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  if (token) {
    localStorage.setItem('idToken', JSON.stringify(token));
    return token;
  }
  return JSON.parse(localStorage.getItem('idToken'));
};

export const request = (url, data, type, noHeaders, params) => new Promise((resolve, reject) => {
  let token = '';
  const apiUrl = api;
  const requestObj = {
    method: type,
    url: apiUrl + url,
  };
  noHeaders || (token = fetchToken());
  type !== 'get' && (requestObj.data = data);
  noHeaders || (requestObj.headers = { Authorization: token });
  params && (requestObj.params = params);
  // interceppedAxios(requestObj).then(resolve, reject);
  axios(requestObj).then(resolve, reject);
});