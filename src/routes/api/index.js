const router = require('express').Router()

router.use("/responses", require("./responseRouter"))

router.get("/", (_, res) => {
    res.json({msg: "Hello world"})
})

module.exports = router
