const axios = require("axios");

const getLocationFromIp = (ip, key) => axios.get(`http://api.ipstack.com/${ip}?access_key=${key}`);

module.exports = {
    getLocationFromIp
};
