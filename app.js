import express from 'express';
import cors from 'cors';
import HelloController
  from "./controllers/hello-controller.js"
import UserController
  from "./controllers/users/users-controller.js"
import TuitsController
  from "./controllers/tuits/tuits-controller.js";

import mongoose from "mongoose";

//mongoose.connect('mongodb://127.0.0.1:27017/tuiter');
mongoose.connect('mongodb+srv://admin:v940r930s@cluster0.bktxxak.mongodb.net/tuiter?retryWrites=true&w=majority');


const app = express();
app.use(cors());
app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000)
