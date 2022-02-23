const { Router } = require('express');

let error = '';

const errorRouter = Router();

errorRouter.get('/error', (req, res) => {
    const {query} = req;
    res.render('error', {error: query.error});
});

module.exports = errorRouter;
