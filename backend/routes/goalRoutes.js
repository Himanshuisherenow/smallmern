const express = require('express');
const router = express.Router();
const { setGoal,getGoals,updateGoal,deleteGoal} = require('../controller/goalController');

// router.route('/').get(getGoals).post(setGoals);
// router.route('/:id').put(updateGoal).delete(deleteGoal);

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)
module.exports = router;