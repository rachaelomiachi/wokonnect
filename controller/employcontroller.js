const employer = require("../model/job")


const postJob = async(req, res, next)=>{

   const {title,  state, address, description} = req.body

   if (title ==="" || state === "" || address === "" || description ==="") {
    res.json("these fields are required")
    
   } else{
    var newEmployer = new employer({
        title:req.body.title,
        state: req.body.state,
        address: req.body.address,
        description:req.body.description
    })

    try{
            
        await newEmployer.save();
        res.json("job posted sucessful")
    }catch(error){
            res.json(error)
    }

   }




}


const getAllJobs = async(req, res, next)=>{
    const employers = await employer.find({})
    if(!employers){
        res.json("error")
    }else{
       
        res.json(employers)
    }
   }




   const search = async (req, res) => {
    const criteria = req.query;
    const query = {};

    if (criteria.title) {
        query.title = { $regex: new RegExp(criteria.title, 'i') }; // Correct regex usage
    }

    try {
        const result = await employer.find(query);
        res.render("index",{result});
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while searching for jobs.' });
    }
};


const searchState = async (req, res) => {
    const criteria = req.query;
    const query = {};

    if (criteria.state) {
        query.state = { $regex: new RegExp(criteria.state, 'i') }; // Correct regex usage
    }

    try {
        const result = await employer.find(query);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while searching for jobs.' });
    }
};

module.exports = {postJob, getAllJobs, search, searchState}