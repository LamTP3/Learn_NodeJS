const router = require('express').Router()
const { getHomePage, getSamplePage } = require('../controllers/homeController')
router.get('/', getHomePage)

router.get('/sample', getSamplePage)


module.exports = router
