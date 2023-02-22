const express = require('express');
const { getAll, placeFinancialRecord, getCurrent, getByYear, deleteById } = require('../controllers/financial.controllers');
const { login, register } = require('../controllers/user.controllers');
const authenticate = require('../lib/authenticate');
const router = express.Router()

module.exports = routes = (app) => {
    router.post("/login", login);
    router.post("/register", register)

    router.get('/', authenticate, getAll)
    router.get('/financial/year/current', authenticate, getCurrent)
    router.post('/financial', authenticate, placeFinancialRecord)
    router.get('/financial/year/:year', authenticate, getByYear)
    router.delete("/financial/delete/:id", authenticate, deleteById);

    app.use(router)
}