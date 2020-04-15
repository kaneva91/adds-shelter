const controllers = require('../controllers/');
const router = require('express').Router();

 

router.get('/:id', controllers.ad.get.getUserAds);
router.get('/', controllers.ad.get.getAllAds);
router.post('/create/:id', controllers.ad.post.create);
router.post('/favourites/:id', controllers.ad.post.addToFavourites);

module.exports = router;