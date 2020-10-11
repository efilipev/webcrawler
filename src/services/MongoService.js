const {
    Job,
    Category,
    Item
} = require('../model');

const saveJob = data => {
    return Job.save(data);
};

const deleteJob = data => {
    return Job.remote(data);
};

const findJobById = id => {
    return Job.findOne(id);
};

const getJobs = () => {
    return Job.get();
};

const saveCategory = data => {
    return Category.save(data);
};

const deleteCategory = data => {
    return Category.remove(data);
};

const findCategoryById = id => {
    return Category.findOne(id);
};

const getCategories = () => {
    return Category.get();
};

const saveItem = data => {
    return Item.save(data);
};

const deleteItem = data => {
    return Item.remove(data);
};

const findItemById = id => {
    return Item.findOne(id);
};

const getItems = () => {
    return Item.get();
};

module.exports = {
    saveJob,
    getJobs,
    deleteJob,
    findJobById,
    getItems,
    saveItem,
    deleteItem,
    findItemById,
    saveCategory,
    getCategories,
    deleteCategory,
    findCategoryById,
};
