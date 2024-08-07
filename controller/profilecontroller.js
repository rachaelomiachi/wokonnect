const profile = require('../model/profile.js');


    const createProfile = async(req, res, next)=>{

    const{image, firstname,lastname, skills, verify,resume, descrition} = req.body

    if ( firstname ==="" || lastname ==="" || skills ==="" || description ==="" ) {

        res.json("kindly fill this field")
        
    }else{
        var newProfile = new profile ({
            image:req.body.image,
            firstname:req.body.firstname,
            lastname:req.body.skills,
            verify:req.body.verify,
            resume:req.body.resume,
            description:req.body.firstname
        })

        try {
            await newProfile.save();
            res.json("your profile has been created successfully")
        } catch (error) {
            res.json(error)
        }
    }
};
module.exports = {createProfile}