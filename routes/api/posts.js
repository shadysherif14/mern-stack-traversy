const router = require('express').Router();

router.get('/', (_, res) => res.send('Posts'));


module.exports = router;