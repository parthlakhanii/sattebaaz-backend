'use strict'

const express = require('express')
const routes = express.Router()
const createUserController = require('../controllers/create-user-controller')

console.log('router')
routes.post('/', createUserController.createUser)

module.exports = routes