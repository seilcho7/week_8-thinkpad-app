const express = require('express');
const Router = express.Router;

// const controller = require('../controllers/thinkpad');
// You don't want the box, just the stuff inside.
const {create,
    retrieveAll,
    update,
    deleteOne
} = require('../controllers/thinkpad');

// Create the router
const thinkpadRoutes = Router();

// Add handlers for my routes

// GET
thinkpadRoutes.get('/', retrieveAll);

// POST
thinkpadRoutes.post('/', create);

// PUT
thinkpadRoutes.put('/', update);

// DELETE
thinkpadRoutes.delete('/', deleteOne);

// Export the router
module.exports = thinkpadRoutes;