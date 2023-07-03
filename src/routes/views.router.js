import express from "express";
import { auth } from "../middlewares/auth.js";

export const viewsRouter = express.Router();

viewsRouter.get("/login", async (req, res) => {
    res.render("login-form");
});

viewsRouter.get("/register", async (req, res) => {
    res.render("register-form");
});

viewsRouter.get("/profile", auth, async (req, res) => {
    res.render("profile");
});

viewsRouter.get('/logout', (req, res) => {
    req.session.destroy(err => {
      if (err) {
        return res.render("error-page");
      }
      return res.redirect("/login");
    })
   });