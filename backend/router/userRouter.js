const express = require('express');
const router = express.Router();
const { signUp, signIn } = require('../controller/users'); // Adjust the path as needed

router.post('/signup', signUp);
router.post('/signin', signIn);

module.exports = router;
