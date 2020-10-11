const axios = require('axios');

const fetchPage = async url => {
    try {
        const page = await axios.get(url);
        return page.data;
    } catch (e) {
        console.error('Failed to fetch the page ', e);
    }
};

module.exports = {
    fetchPage
};
