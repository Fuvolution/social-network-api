const router = require('express').Router();
const apiRouters = require('./api');

router.user('/api', apiRoutes);

router.use((req, res) => res.send(`That's the wrong route!`)); 

module.exports = router; 