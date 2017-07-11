import axios from 'axios';
import omit from 'lodash.omit';

const headers = {
  'Accept': 'application/json',
  'Content-type': 'application/json'
};

const contructUrl = (url) => `http://localhost:5000${url}`;

export const del = (url, data) => axios.delete(contructUrl(url), { params: { ...data } });

export const get = (url, data) => axios.get(contructUrl(url), { params: { ...data } });

export const post = (url, data) => axios.post(contructUrl(url), data);

export const put = (url, data) => {
  const { _id } = data;
  const requestData = omit(data, '_id');
  return axios.put(contructUrl(url), requestData, {
    params: { _id },
    headers
  });
};
