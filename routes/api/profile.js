const router = require('express').Router();

router.get('/', (_, res) => res.send('Profiles'));

module.exports = router;