const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, applicationController.applyForJob);
router.get('/', authMiddleware, applicationController.getApplications);
router.get('/job/:jobId', authMiddleware, applicationController.getApplicationsByJob);

module.exports = router;
