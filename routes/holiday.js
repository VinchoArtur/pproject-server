var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a holiday');
});

router.post('/getCurrentHoliday', (req, res) => {
    res.send({
        id: 1,
        name: 'alyverdy',
        description: 'description'
    })
});

module.exports = router;
