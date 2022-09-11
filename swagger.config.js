const { User } = require('./documentation/user')
const { Errands } = require('./documentation/errands')

module.exports = {
    info: {
        version: '1.0.0',
        title: 'pratica backEnd',
        description: 'API modulo backEnd'
    },
    host: 'localhost:8080',
    schemes: ['http', 'htttps'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
        JWT: {
            description: 'JWT token',
            type: 'apiKey',
            in: 'header',
            name: 'Authorization'
        }
    },
    definitions: {
        User,
        UserList: [
            {href: '#/definitions/user'}
        ],
        Errands,
        ErrandsList: [
            {href: '#/definitions/errands'}
        ]
        
    }
}