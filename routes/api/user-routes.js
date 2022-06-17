const router = require('express').Router();
const { getAllUsers, createUser, getUserById, updateUser, deleteUser, addFriend } = require('../../controllers/user-controller');


//  /api/users
router.route('/')
.get(getAllUsers)
.post(createUser);

//  /api/users/:id
router.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// add a new friend /api/users/:userId/friends/:friendId
router.route('/:id/friends/:friendId')
.post(addFriend);

// remove a friend /api/users/:userId/friends/:friendId
// router.route('/:id/friends/:friendId')
// .delete(removeFriend);


module.exports = router;