import Password from "../models/password.model.js"


export const savePassword = async(req, res) => {
    const {password} = req.body
    const newPassword = new Password({
        userId : req.userId,
        password : password
    })
    await newPassword.save()
    res.send({newPassword})
}


export const getAllPasswords = async (req,res) =>{
    const passwords = await Password.find({userId:req.userId}).sort({createdAt:-1})
    res.send({passwords : passwords})
}


export const deletePassword = async (req,res) =>{
    try {
        const {id} = req.body
        const data = await Password.deleteOne({_id:id})
        res.send({data:data})
    } catch (error) {
        console.log(error);
    }
}


