const swaggerAutogen = require('swagger-autogen')()
const doc = require('./swagger.config')

const outPutFile = './src/swagger-documentation.json'
const endPoint = [
    './src/routers/userRouters.ts',
    './src/routers/errandsRouters.ts'
]

swaggerAutogen(outPutFile, endPoint, doc)