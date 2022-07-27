const router = require('express').Router()
const AuthController = require('../controllers/auth')

router.post('/', AuthController.SignIn )
router.post('/create', AuthController.CreateNewUser )

module.exports = router