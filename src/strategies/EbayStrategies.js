const { fetchPage }  = require('../utils/httpUtils');
const { getBody } = require('../services');
const { menShoesPage } = require('../utils/links');

exports.handleCellPhonesPage = async () => {
    const data = await fetchPage(menShoesPage);
    const body = getBody(data);
    return body.querySelector("p").textContent;
};
