const CategoryService = require('../services/category.service');
const service = new CategoryService();
const checkRolesGql = require('../utils/checkRolesGql');
const checkJwtGql = require('../utils/checkJWTGql');

const addCategory = async (_, { dto }, context) => {
    const user = await checkJwtGql(context);
    checkRolesGql(user, 'admin');
    return service.create({ ...dto, image: dto.image.href });
};

const getCategory = async (_, { id }, context) => {
    return service.findOne(id);
};

module.exports = { addCategory, getCategory };