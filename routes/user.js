const router = require('express').Router()
const UserController = require('../controllers/user')

router.get('/', UserController.getAllUsers )
router.get('/:id', UserController.getUserById )
router.post('/', UserController.createNewUser )


module.exports = router