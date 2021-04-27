
const sanitizeHtml = require('sanitize-html');

// Sanitize data user inputs
module.exports = (request, response, next) => {
    if (request.body) {
        for (const propName in request.body) {
            request.body[propName] = sanitizeHtml(request.body[propName]);
        }
    }
    next();
}