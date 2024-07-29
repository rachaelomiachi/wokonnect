const User = require("../model/user.model")


const getUserById = async(req, res, next)=>{
        try{
            const user = await User.findById(req.params.userId)
            if(!user){
                res.json("user not found")
            }else{
                const {...test} = user._doc
                res.json(test)
            }
        }catch(error){
                res.json("invalid user")
        }
}






module.exports = {getUserById}