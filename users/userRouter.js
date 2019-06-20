const express = 'express';

const userDb = require('./userDb');

const router = express.Router();

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', async (req, res) => {
    try {

    }
    catch{

    }
});

router.get('/:id', validateUserId, async (req, res) => {
    try {
        const user = await userDb.getById(req.params.id);

        if(user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({
                message: 'This user does not exist',
            });
        }
    }
    catch(error) {
        res.status(500).json({
            message: 'Error retrieving user data'
        });
    }
});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

async function validateUserId(req, res, next) {
    try {
        const { id } = req.params;
        const user = await userDb.getById(id);
        if (user) {
            req.user = user;
            next();
        } else {
            next({
                message: 'Invalid User ID'
            })
        }
    }
    catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Unable to process request. Please try again.'
        })
    }
    next();
};

function validateUser(req, res, next) {
    next();
};

function validatePost(req, res, next) {
    next();
};

module.exports = router;
