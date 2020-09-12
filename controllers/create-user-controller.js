'use strict'

const createUserService = require('../services/create-user-service')
const { httpStatusCode, generateSendErrorResponse } = require('../lib/utils')

const createUser = async (req, res) => {
    console.log('controller')
    try {
        let response = null
        if (req.body) {
            response = await createUserService.createUser(req.body)
        }
        const statusCode = response.status_code || httpStatusCode.OK
        return res.status(statusCode).send(response)
    } catch (error) {
        console.log(error)
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(generateSendErrorResponse(error, 'Error while inserting news data'))
    }
}

module.exports = {
    createUser
}