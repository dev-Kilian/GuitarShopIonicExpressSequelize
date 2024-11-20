module.exports = (sequelize, Sequelize) => {
    const Guitar = sequelize.define("guitar", {
        brand: {
            type: Sequelize.STRING
        },
        model: {
            type: Sequelize.STRING
        },
        filename: {
            type: Sequelize.STRING
        }
    });

    return Guitar;
};