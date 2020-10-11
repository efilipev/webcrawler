const { JSDOM } = require("jsdom");

const getBody = page => {
    const html = new JSDOM(page).window.document.body;
    return html;
};

module.exports = {
    getBody
};
