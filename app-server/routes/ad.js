const controllers = require('../controllers/');
const router = require('express').Router();

 

router.get('/:id', controllers.ad.get.getUserAds);
router.get('/', controllers.ad.get.getAllAds);
router.post('/create/:id', controllers.ad.post.create);
router.post('/delete/:id', controllers.ad.post.deleteAd);
router.post('/favourites/:id', controllers.ad.post.addToFavourites);
//router.post('/favourites/remove:id', controllers.ad.post.addToFavourites);
router.post('/search', controllers.ad.post.search);

module.exports = router;