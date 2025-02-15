const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        // snake_case convention
        underscored: true,
        // modifying properties names
        createdAt: 'created_at',
        updatedAt : 'updated_at'
    }
});

module.exports = sequelize;