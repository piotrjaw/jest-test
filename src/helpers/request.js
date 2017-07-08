import axios from 'axios';

const contructUrl = (url) => `http://localhost:5000${url}`;

export const del = (url) => axios.delete(contructUrl(url));

export const get = (url) => axios.get(contructUrl(url));

export const post = (url, data) => axios.post(contructUrl(url), data);

export const put = (url, data) => axios.put(contructUrl(url), data);
