const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  editUser,
  deleteUser,
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(editUser).delete(deleteUser);

module.exports = router;