const {
    Job,
    Category,
    Item
} = require('../model');

const saveJob = data => {
    return Job.save(data);
};

const deleteJob = data => {
    return Job.remove(data);
};

const findJobById = id => {
    return Job.findOne(id);
};

const getJobs = () => {
    return Job.get();
};

const saveCategory = data => {
    return Category({ name: 'shoes', domain: '6pm', data }).save();
};

const deleteCategory = data => {
    return Category.remove(data);
};

const findCategoryById = id => {
    return Category.findOne(id);
};

const getCategories = async () => {
    return await Category.find();
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

const getItems = async () => {
    return await Item.find();
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
