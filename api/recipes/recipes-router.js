const router = require('express').Router();
const Recipe = require('./recipes-model');

router.get('/:recipe_id', (req, res, next)=> {
    Recipe.getRecipeById(req.params.recipe_id)
        .then(source => {
            res.status(200).json(source)
        })
        .catch(next)
})

router.use('*', (req, res)=> {
    res.json({api: 'reached'})
})
router.use((err, req, res, next)=> {
    res.status(500).json({
        message: err.message
    })
})

module.exports = router;
