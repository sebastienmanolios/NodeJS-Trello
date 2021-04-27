const { List } = require('../models');

module.exports = {

    getAllLists: async (request, response, next) => {
        try {
            const lists = await List.findAll({
                include: {
                    association: 'cards',
                    include: 'tags'
                },
                // OR
                // include: {
                //     all: true,
                //     nested: true
                //   },
                order: [
                    ['position', 'ASC'],
                    ['cards', 'position', 'ASC']
                ]
            });
            // It will work as well with response.send(), .json() is specialized to json files
              response.json(lists);
        } catch (error) {
            next(error);
        }
    },

    getOneList: async (request, response, next) => {

        const id = Number(request.params.id);

        if (isNaN(id)) {
            // wrong syntax - 400 staus code
            return response.status(400).json({
                error: `the provided id must be a number`
            });
        }

        try {
            const list = await List.findByPk(id, {
                include: {
                    association: 'cards',
                    include: 'tags'
                }
            });

            // If we did not find a list for this id, we send a 404
            if (!list) {
                return next();
            }

            response.json(list);
        } catch (error) {
            next(error);
        }
    },

    createList: async (request, response, next) => {
        const data = request.body;

        if (!data.name) {
            return response.status(400).json({
                error: `You must provide a name`
            });
        }

        if (data.position && isNaN(Number(data.position))) {
            return response.status(400).json({
                error: `position must be a number`
            });
        }

        try {
            const list = await List.create(data);
            // OR
            // const list = await List.build(data);
            // await list.save();
           
            response.json(list);

        } catch (error) {
            next(error);
        }
    },

    updateList: async (request, response, next) => {

        const data = request.body;

        const id = Number(request.params.id);

        if (isNaN(id)) {
            return response.status(400).json({
                error: `the provided id must be a number`
            });
        }

        if (data.position && isNaN(Number(data.position))) {
            return response.status(400).json({
                error: `position must be a number`
            });
        }

        try {
            const list = await List.findByPk(id);
            if (!list) {
                next();
            }

            for (const field in data) {
                if (typeof list[field] !== 'undefined') {
                    list[field] = data[field];
                }
            }
            await list.save();
            response.json(list);
        } catch (error) {
            next(error);
        }

    },

    deleteList: async (request, response, next) => {

        const id = Number(request.params.id);

        if (isNaN(id)) {
            return response.status(400).json({
                error: `the provided id must be a number`
            });
        }

        try {
            const list = await List.findByPk(id);
            if (!list) {
                return next();
            }

            await list.destroy();
            response.json('OK');

        } catch (error) {
            next(error);
        }

    },

}