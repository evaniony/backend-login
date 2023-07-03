import express from "express";
import { userModel } from "../DAO/models/users.model.js";

export const loginRouter = express.Router();

loginRouter.post("/register", async (req, res) =>{
    const {first_name, last_name, email, age, password } = req.body;
    if(!first_name || !last_name || !email || !age || !password){
        return res.status(400).render("error-page");
    }
    
    try{
        await userModel.create({first_name, last_name, email, age, password});
        req.session.first_name = first_name;
        req.session.email = email;
        req.session.admin = false;
        return res.redirect("/profile");
    }catch(e){
        return res.status(400).render("error-page");
    }
});

loginRouter.post("/login", async (req, res) =>{
    const {email, password } = req.body;
    if(!email || !password){
        return res.status(400).render("error-page");
    }
    
    try{
        const foundUser = await userModel.findOne({ email });
        if(foundUser && foundUser.password === password){
            //se respeta lo que dice la base de datos;
            req.session.first_name = foundUser.first_name;
            req.session.email = foundUser.email;
            req.session.admin = foundUser.admin;
            return res.redirect("/profile");
        }else{
            return res.status(400).render("error-page");  
        }
    }catch(e){
        return res.status(400).render("error-page");
    }
});