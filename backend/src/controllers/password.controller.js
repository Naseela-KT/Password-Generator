import Password from "../models/password.model.js"
import mongoose from "mongoose"


export const savePassword = async(req, res) => {
    const {password,userId} = req.body
    const newPassword = new Password({
        userId : userId,
        password : password
    })
    await newPassword.save()
    res.send({newPassword})
}


export const getAllPasswords = async (req,res) =>{
    const userId = req.query.userId;
    try {
        const passwords = await Password.find({ userId: userId }).sort({ createdAt: -1 });
        res.send({ passwords });
    } catch (error) {
        console.error("Error fetching passwords:", error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
    };



export const deletePassword = async (req,res) =>{
    try {
        const {id} = req.body
        const data = await Password.deleteOne({_id:id})
        res.send({data:data})
    } catch (error) {
        console.log(error);
    }
}


