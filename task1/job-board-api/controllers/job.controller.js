const path = require('path')
const asyncHandler = require('express-async-handler')
const {Job, Bookmark, JobApplication, User} = require('../models')
const {cloudinaryUtil} = require('../utils')

// @ desc ---- Get Jobs  @ access -- all
// route  --POST-- [base_api]/jobs
const getJobs = asyncHandler(async (req, res) => {
    const pageNumber = +(req.query.pageNumber) || 0
    const limit = +(req.query.limit) || 12
    const result = {}
    const totalJobs = await Job.count()

    result.totalJobs = totalJobs

    let startIndex = pageNumber * limit
    const endIndex = (pageNumber + 1) * limit

    if (startIndex > 0) {
        result.previous = {
            pageNumber: pageNumber - 1,
            limit: limit
        }
    }

    if (endIndex < totalJobs) {
        result.next = {
            pageNumber: pageNumber + 1,
            limit: limit
        }
    }

    result.data = await Job.findAll({
        order: [["id", "ASC"]],
        offset: startIndex,
        limit: limit
    })

    result.rowsPerPage = limit

    return result.data ? res.status(200).send(result) : res.send('No Jobs found')
})

// @ desc ---- Create Job  @ access -- employer only
// route  --POST-- [base_api]/jobs/add
const addJob = asyncHandler(async (req, res) => {
    const employer_id = req.user.userId;
    const {
        title, category, company, companyLogo, location, type, experience, description, skills, salary
    } = req.body;

    const existingJob = await Job.findOne({where: {title, company}})
    if (existingJob) {
        res.status(409)
        throw new Error('You already created a similar job. Change the title or the company name')
    }

    const newJob = await Job.create({
        title, category, company, companyLogo, location, type, experience, description, skills, salary, employer_id
    });
    if (newJob) {
        res.status(201).json({message: "job created successfully", newJob: newJob});

    } else {
        console.error(error);
        res.status(500).json({success: false, message: 'Server error occurred'});
    }
});

// @ desc ---- View a Job  @ access -- all
// route  --POST-- [base_api]/jobs/:jobId
const viewJob = asyncHandler(async (req, res) => {
    const {jobId} = req.params

    const job = await Job.findOne({where: {id: +(jobId)}})

    if (!job) {
        return res.status(404).json({
            message: "Job not found or Employer might have removed it"
        })
    }
    res.status(200).json(job)
})

const updateJob = asyncHandler(async (req, res) => {
   const {jobId} = req.params
    const {
        title, category, company, companyLogo, location, type, experience, description, skills, salary
    } = req.body;

    console.log(req.body)

    const job = await Job.findByPk(+(jobId))
    if(!job){
        res.status(404);
        throw new Error("Job not found / already deleted");
    }

    if(title !== job.title  && company !== job.company){
        // check for similar
        const existingJob = await Job.findOne({where: {title, company}})
        if (existingJob) {
            res.status(409)
            throw new Error('You already created a similar job. Change the title or the company name')
        }
    }

    job.title = title || job.title
    job.category = category || job.category
    job.company = company || job.company
    job.companyLogo = companyLogo || job.companyLogo
    job.location = location || job.location
    job.skills = skills || job.skills
    job.experience = experience || job.experience
    job.type = type || job.type
    job.description = description || job.description
    job.salary = salary || job.salary

    const updatedJob = await job.save()
    res.status(200).json({message: 'job updated successfully', details: updatedJob})
})

const deleteJob = asyncHandler(async (req, res) => {
    res.send('delete')
})

// @ desc ---- Get Employer's Job  @ access -- employer only
// route  --POST-- [base_api]/jobs/employer
const getEmployerJobs = asyncHandler(async (req, res) => {
    const employerId = req.user.userId

    const  data = await Job.findAll({
        where: {employer_id: employerId},
        // include: [{
        //     model: JobApplication,
        //     include: User
        // }]
        include: JobApplication
    })

    res.status(200).send(data)
})

// @ desc ---- Get Job Applicants  @ access -- employer only
// route  --GET-- [base_api]/jobs/applicants/:jobId
const getJobApplicants = asyncHandler(async (req, res) => {
    const {jobId} = req.params;

    const applicants = await JobApplication.findAll({
        where: { job_id: jobId },
        include: User,
    });

    res.status(200).json(applicants);
});

// @ desc ---- Get Resume  @ access -- all
// route  --GET-- [base_api]/jobs/resume/:resumePath
const getResume = asyncHandler(async (req, res, next) => {
    const {resumePath} = req.params;
    const filePath = path.join(__dirname, '../uploads', resumePath)
    res.status(200).sendFile(filePath, (err) => {
        if (err){
            console.log('server error',err)
            next(err)
        }else {
            console.log('Resume sent:', resumeName)
            // next()
        }
    })
});

// --- Bookmarks --- //
const bookmarkJob = asyncHandler(async (req, res) => {
    let {jobId} = req.params
    jobId = +jobId
    const userId = +(req.user.userId)

    const existingBookmark = await Bookmark.findOne({where: {user_id: userId, job_id: jobId}});

    if (existingBookmark) {
        await existingBookmark.destroy();
        return res.status(200).send({message: 'Job removed from bookmarks'});
    }

    const bookmark = await Bookmark.create({user_id: userId, job_id: jobId});
    res.status(200).send({
        message: 'Job bookmarked successfully ✅',
        bookmark
    });
});

// @ desc ---- Get user bookmarks  @ access -- all
// route  --POST-- [base_api]/jobs/bookmarks
const getUserBookmarks = asyncHandler(async (req, res) => {
    const userId = req.user.userId;

    const bookmarkedJobs = await Bookmark.findAll({
        where: {user_id: userId},
        include: Job,
    });

    res.status(200).send(bookmarkedJobs);
});

// --- Applications --- //
// @ desc ---- job application  @ access -- candidate
// route  --POST-- [base_api]/jobs/:jobId/apply
const applyJob = asyncHandler(async (req, res) => {
    const user_id = req.user.userId
    const job_id = req.params.jobId
    const {resume} = req.files

    const existingApplication = await JobApplication.findOne({where: {user_id, job_id}})
    if (existingApplication) {
        res.status(409)
        throw new Error('You have already applied for this job')
    }

    // upload file to CDN
   await cloudinaryUtil.cloudinary.uploader.upload(
        resume.tempFilePath, {
            public_id: `${user_id}_${job_id}_${Date.now()}`,
            resource_type: "raw",
            folder: "resumes"
        }
    ).then(async (data) => {
       // save application to DB
       const application = await JobApplication.create({
           user_id, job_id, resumePath: data.secure_url
       })
       if (!application) {
           res.status(500)
           throw new Error('failed to upload resume')
       }
       res.status(201).json({
           message: "application submitted successfully",
           details: application
       })
   }).catch(error => {
       res.status(500)
       throw new Error('Failed to upload file to server')
   })
})

// @ desc ---- get candidate applications  @ access -- candidate
// route  --GET-- [base_api]/jobs/applications
const getCandidateApplications = asyncHandler(async (req, res) => {
    const userId = req.user.userId
    const applications = await JobApplication.findAll({
        where: {user_id: userId},
        include: Job
    })

    res.status(200).send(applications)
})

module.exports = {
    getJobs,
    addJob,
    viewJob,
    updateJob,
    deleteJob,
    getEmployerJobs,
    getJobApplicants,
    getResume,
    getCandidateApplications,
    bookmarkJob,
    getUserBookmarks,
    applyJob
}