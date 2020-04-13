const controllers = require('../controllers/');
const router = require('express').Router();

 

router.get('/:id', controllers.ad.get.getUserAds);
router.get('/', controllers.ad.get.getAllAds);
router.post('/create/:id', controllers.ad.post.create);

module.exports = router;