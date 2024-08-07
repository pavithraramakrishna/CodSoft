const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, jobController.createJob);
router.get('/', jobController.getJobs);
router.get('/:id', jobController.getJobById);
router.delete('/:id', authMiddleware, jobController.deleteJob);

module.exports = router;
