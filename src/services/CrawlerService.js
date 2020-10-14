const { parse } = require("node-html-parser");

const getBody = page => {
    return parse(page);
};

module.exports = {
    getBody
};
