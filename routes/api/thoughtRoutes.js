const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

//router.route('/:thoughtId/reaction').post(addReaction);

//router.route('/:applicationId/reaction/:reactionId').delete(removeReaction);

module.exports = router;