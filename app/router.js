const express = require('express');

const router = express.Router();

const mainController = require('./controllers/mainController');
const listController = require('./controllers/listController');
const cardController = require('./controllers/cardController');
const tagController = require('./controllers/tagController');

/*
router.get('/lists', listController.getAllList);
router.post('/lists', listController.getAllList);
is equivalent
to 
router.route('/lists')
    .get(listController.getAllLists)
    .post(listController.createList);
*/

// LISTES
router.route('/lists')
    .get(listController.getAllLists)
    .post(listController.createList);
router.route('/lists/:id')
    .get(listController.getOneList)
    .patch(listController.updateList)
    .delete(listController.deleteList);

// CARTES
router.route('/lists/:id/cards')
    .get(cardController.getCardsInList);
router.route('/cards/:id')
    .get(cardController.getOneCard)
    .patch(cardController.updateCard)
    .delete(cardController.deleteCard);
router.route('/cards/')
    .post(cardController.createCard);

// TAGS
router.route('/tags/:id')
    .patch(tagController.updateTag)
    .delete(tagController.deleteTag);
router.route('/tags')
    .get(tagController.getAllTags)
    .post(tagController.createTag);
router.route('/cards/:id/tags')
    .post(tagController.addTagToCard);
router.route('/cards/:card_id/tags/:tag_id')
    .delete(tagController.removeTagFromCard);

router.use(mainController.notFound);

// This middleware will be executed if it will receive an object error as his first argument --> next(error)

router.use(mainController.errorServer);

module.exports = router;