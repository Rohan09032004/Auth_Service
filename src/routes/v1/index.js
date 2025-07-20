const express = require('express');
const UserController = require('../../controllers/user-controller');
// const {AuthRequestValidator} = require('../../middlewares/index')

const router = express.Router();

router.post('/signup',
    UserController.create
);

router.post('/signin',
    UserController.signIn
);

// router.get('/isauthenticated',
//         UserController.isAuthenticated
// );

// router.get(
//     '/isAdmin',
//     AuthRequestValidator.validateIsAdminRequest,
//     UserController.isAdmin
// );

// router.get('/user/:userId', UserController.getDetails);

module.exports = router;