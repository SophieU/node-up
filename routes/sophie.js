const express = require('express');
const router = express.Router();


router.use(function (req, res, next) {
    console.log(111)
    next();
})
router.get('/', function (req, res, next) {
    res.send('your are visition sophie')
});

router.get('/visit/:userId', function (req, res, next) {
    let userId = req.params.userId;
    res.json({'userId':userId})
});
router.get('/vectory/:number', function (req, res, next) {
    let param = req.params;
    res.json(param)
})

module.exports = router;