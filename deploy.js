const path = require('path')
const iga = require('iga')
module.exports = iga.getMiddleWare({ routes: path.join(__dirname, 'routes') })
