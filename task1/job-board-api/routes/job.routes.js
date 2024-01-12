const router = require('express').Router();
const {jobController} = require('../controllers');
const {authMiddleware, fileMiddleware, inputValidation} = require('../middleware');

// -- public routes -- //
router.get('/', jobController.getJobs);
router.get('/:jobId', jobController.viewJob);

// -- private routes -- //
router.use(authMiddleware.verifyToken);

router.get('/view/bookmarks', jobController.getUserBookmarks);
router.get('/resume/:resumePath', jobController.getResume); // get candidate resume

// --- employer only routes --- //
router.get('/me/my-jobs', authMiddleware.requireEmployer, jobController.getEmployerJobs); // get emp jobs
router.get('/applicants/:jobId', authMiddleware.requireEmployer, jobController.getJobApplicants); // get job applicants

router.post('/add', [
        authMiddleware.requireEmployer,
        inputValidation.jobInputs,
        inputValidation.validate
    ],
    jobController.addJob);
router.route('/:jobId')
    .put(authMiddleware.requireEmployer, jobController.updateJob)
    .delete(authMiddleware.requireEmployer, jobController.deleteJob);

// candidate only routes
router.put('/bookmark/:jobId', jobController.bookmarkJob)
router.post('/:jobId/apply', jobController.applyJob)
router.get('/me/applications', jobController.getCandidateApplications);

module.exports = router;
