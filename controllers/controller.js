const registerView = (req,res) => {
    res.render("register", {});
}
const loginView = (req,res) => {
    res.render("login", {});
}
const registerPrueba = (req,res) => {
    const { name, email, location, password, confirm } = req.body;

    if(name === 'A'){
        console.log("Llega bien")
    }else{
        conseole.log("Llega bien")
    }
}
module.exports = {registerView, loginView};