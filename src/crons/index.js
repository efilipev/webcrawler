const CronJob = require('cron').CronJob;
const { saveCategory } = require('../services/MongoService');
const { menShoesPage } = require('../utils/links');
const { fetchPage }  = require('../utils/httpUtils');
const { handleMenShoesPage } = require('../strategies');

const job = new CronJob('* * 6 * * *', async () => {
    console.log('Cron job has been started');
    try {
        const htmlPage = await fetchPage(menShoesPage);
        const data = await handleMenShoesPage(htmlPage);
        saveCategory(data);
    } catch (e) {
        console.error('The cron job error', e);
    }
}, null, true, 'Europe/Kiev');

module.exports = {
    job
};
