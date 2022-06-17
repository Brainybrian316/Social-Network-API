const router = require('express').Router();
const { getAllThoughts, createThought, getThoughtById, updateThought, deleteThought } = require('../../controllers/thought-controller');

//  /api/thoughts/<userId>
router.route('/').post(createThought);

// get all thoughts
router.route('/').get(getAllThoughts);

// get thought by id
router.route('/:id').get(getThoughtById);

// update thought
router.route('/:id').put(updateThought);

// delete thought
router.route('/:id').delete(deleteThought);

module.exports = router;
