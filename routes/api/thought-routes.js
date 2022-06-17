const router = require('express').Router();
const { getAllThoughts, createThought, getThoughtById, updateThought, deleteThought } = require('../../controllers/thought-controller');

//  create thought /api/thoughts
router.route('/').post(createThought);

// get all thoughts /api/thoughts
router.route('/').get(getAllThoughts);

// get thought by id /api/thoughts/<thought_id>
router.route('/:id').get(getThoughtById);

// update thought /api/thoughts/<thought_id>
router.route('/:id').put(updateThought);

// delete thought /api/thoughts/<thought_id>
router.route('/:id').delete(deleteThought);

module.exports = router;
