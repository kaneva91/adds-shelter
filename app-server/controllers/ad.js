const models = require('../models');

module.exports = {
    get: {
        getUserAds: (req, res, next) => {
            const userId = req.params.id;
            models.User.find({ _id: userId }).populate('ads').then(resp => {
              const {ads}= resp[0]
                res.send(ads)
            })
        },
        getAllAds : (req, res, next) =>{
            models.Ad.find().then(resp => res.send(resp))
        }
    },

    put: {

    },

    post: {
        create: (req, res, next) => {
            const userId = req.params.id;
            const { title, imageUrl, category, price, description } = req.body;
            models.Ad.create({ title, imageUrl, category, price, description, creatorId : userId})
                .then((createdAdd) => {
                    models.User.updateOne({ _id: userId }, { $push: { ads: createdAdd } })
                        .then(res => console.log(res))
                    res.send(createdAdd)
                })
                .catch(next)
        },
        addToFavourites:(req, res, next)=>{
            const userId = req.params.id;
            const {adId} = req.body;
            const ad = null;
             models.Ad.find({_id : adId}).then(favouriteAd=> {
                 console.log(favouriteAd)
                 models.User.updateOne({ _id: userId }, { $push: { favourites: favouriteAd } })
                        .then(res => console.log(res))
                    res.send(createdAdd)
                })
                .catch(next)
    
        }

    }

};