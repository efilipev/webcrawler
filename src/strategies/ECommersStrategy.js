const { getBody } = require('../services');

exports.handleMenShoesPage = async htmlPage => {
    const page = getBody(htmlPage);
    const elements = page.querySelector(".ER").childNodes;
    let result = [];
    for (let element of elements) {
        const elementDescription = element.childNodes[1];
        result.push( {
            brand: elementDescription.childNodes[1].text,
            model: elementDescription.childNodes[2].text,
            currentPrice: elementDescription.childNodes[3].childNodes[1].childNodes[0].rawText,
            imageUrl: element.childNodes[0].querySelector('.Hh').childNodes[0].rawAttrs.split(' ')[1],
        });
    }
    return result;
};
