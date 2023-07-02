//capa --- base de datos;
//users;

//@ts-check
import { Schema, model } from "mongoose";

export const userModel = model(
  "users" /* nombre de la collection donde se va a hacer el crud */,
  /* OBLIGA A CREATE-UPDATE A SEGUIR ESTE MOLDE */
  new Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true},
  })
);

//modelo de mongoose;
//poder del crud; sin uso del db;