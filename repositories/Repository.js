import axios from 'axios';
const baseDomain = process.env.VUE_APP_BASE_DOMAIN;
const baseURL = `${baseDomain}/`;
export default axios.create({
  baseURL,
});
