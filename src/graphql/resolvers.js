const { product, products, addProduct, updateProduct, deleteProduct, getProductsByCategory } = require('./product.resolvers');
const { login } = require('./auth.resolvers');
const { addCategory, getCategory } = require('./category.resolvers');

const resolvers = {
    Query: {
        hello: () => 'Hello GraphQL',
        getPerson: (_, { name, age }) => `Hello ${name} you are ${age} years old`,
        // Products
        product,
        products,
        category: getCategory
    },
    Mutation: {
        login,
        addProduct,
        updateProduct,
        deleteProduct,
        addCategory
    },
    Category: {
        products: getProductsByCategory
    }
};

module.exports = resolvers;