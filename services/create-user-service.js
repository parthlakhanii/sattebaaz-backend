'use strict'

const { logger, httpStatusCode, generateSuccessResponse } = require('../lib/utils')
const user = require('../models/user')
const { encrypt } = require('../lib/crypto')

const createUser = async (body) => {
    console.log('service')
    try {
        let response;
        let jsonBody = generateJsonBody(body)
        response = await user.insertMany(jsonBody)
        logger.debug('Created User from service = %j', response)
        return generateSuccessResponse(response, 'news data added succesfully')
    } catch (error) {
        logger.eroor('Error while creating user from service = %j', error, error)
        return generateSuccessResponse(error, 'Error While Creating User', httpStatusCode.INTERNAL_SERVER_ERROR)
    }
}

function generateJsonBody(body) {
    let json = {}
    json['firstName'] = body.firstName
    json['lastName'] = body.lastName
    json['email'] = body.email
    json['password'] = encrypt(body.password)
    return json
}

module.exports = {
    createUser
}