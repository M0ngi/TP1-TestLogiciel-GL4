const router = require('express').Router()
const responseCtrl = require("../../controllers/responseCtrl")

router.post('/', responseCtrl.createResponse)

module.exports = router
