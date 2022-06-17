const router = require('express').Router();
const { getAllThoughts, createThought } = require('../../controllers/thought-controller');

//  /api/thoughts/<userId>
router.route('/:userId').post(createThought);

// get all thoughts
router.route('/').get(getAllThoughts);

module.exports = router;
