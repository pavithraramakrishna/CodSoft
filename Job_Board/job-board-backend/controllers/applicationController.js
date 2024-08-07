const Application = require('../models/Application');

exports.applyForJob = async (req, res) => {
  const { jobId, resume } = req.body;

  try {
    const newApplication = new Application({
      jobId,
      candidateId: req.user.id,
      resume,
    });

    const application = await newApplication.save();
    res.json(application);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.find({ candidateId: req.user.id }).populate('jobId', ['title', 'company']);
    res.json(applications);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getApplicationsByJob = async (req, res) => {
  try {
    const applications = await Application.find({ jobId: req.params.jobId }).populate('candidateId', ['name', 'email']);
    res.json(applications);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
