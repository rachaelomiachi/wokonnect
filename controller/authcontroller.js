const User  = require('../model/user.model.js');

const logIn = async(req, res, next)=>{
    const {email, password} = req.body

    if( email === "" || password === ""){
            res.json("invalid email or password")

    }else{
        try {
            const valid =  await User.findOne({email})
            if(!valid){
             return res.json('user not found')
            }else{
             res.json("welcome userr")
            }
         } catch (error) {
             res.json(error)
         }
    }
    
}


 const signUp = async (req, res, next)=>{
      


        var newUser = new User({
            username: req.body.username,
            email:req.body.email,
            password: req.body.password
        })

        try{
            
            await newUser.save();
            res.json("Signup sucessful")
        }catch(error){
                next(error)
        }
}

module.exports ={signUp, logIn}