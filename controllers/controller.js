const models = require("../models");

const registerView = (req,res) => {
    res.render("register", {});
}
const loginView = async (req,res) => {

    let user = await models.user.findAll();
    console.log(JSON.stringify(user));
    res.render("login", {});
}

const registerPrueba = (req,res) => {
    const { name, email, location, password, confirm } = req.body;

    if(name === 'A'){
        console.log("Llega bien")
    }else{
        console.log("Llega bien")
    }
}
module.exports = {registerView, loginView};