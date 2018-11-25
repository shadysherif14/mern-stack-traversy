const router = require('express').Router();

router.get('/', (_, res) => res.send('Users'));


module.exports = router;