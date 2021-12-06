import {getInform} from "../controllers/user.controller.js";

export default (app)=>{
    // app.route("/", (req, res)=>{
    //     res.send("Hello World !!!");
    // });

    app.route("/").get(getInform);
}