const express = require("express")
const router = express()
const {postJob, getAllJobs, search, searchState} = require("../controller/employcontroller")

router.post('/postjob', postJob)
router.get('/getjobs', getAllJobs)
router.get('/searchjobs', search)
router.get('/searchstate', searchState)
module.exports = router