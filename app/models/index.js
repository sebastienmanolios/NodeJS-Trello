const List = require('./list');
const Card = require('./card');
const Tag = require('./tag');

// ---------------------------------------------------------------------
// HOW our entities are associated ? we tell just here to sequelize
// ---------------------------------------------------------------------

// 1:N association between 2 entities
List.hasMany(Card, {
    as: 'cards',
    foreignKey: 'list_id'
});
Card.belongsTo(List, {
    as: 'list',
    foreignKey: 'list_id'
});

// N:N relation
Card.belongsToMany(Tag, {
    as: 'tags',
    through: 'card_has_tag',
    foreignKey: 'card_id',
    otherKey: 'tag_id',
    timestamps: false
});
Tag.belongsToMany(Card, {
    as: 'cards',
    through: 'card_has_tag',
    foreignKey: 'tag_id',
    otherKey: 'card_id',
    timestamps: false
});

module.exports = { List, Card, Tag };