const router = require('express').Router();
const { getAllThoughts, createThought, getThoughtById } = require('../../controllers/thought-controller');

//  /api/thoughts/<userId>
router.route('/:userId').post(createThought);

// get all thoughts
router.route('/').get(getAllThoughts);

// get thought by id
router.route('/:id').get(getThoughtById);

module.exports = router;
