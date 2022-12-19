const models = require("../models");
const bcrypt = require('bcryptjs')

/* Users */

const getAllUsers = async (req,res) => {
    let user =  await models.user.findAll({exclude: 'password'});
    /*console.log(JSON.stringify(user));*/
    res.json(user)
}
const getUserByPK = async (req,res) => {
    let user = await models.user.findOne({exclude: 'password', where: {idUser:req.params.idUser}});
    /*console.log(JSON.stringify(user));*/
    res.json(user);
}
const getUserByName = async (req,res) => {
    let user = await models.user.findOne({
        where: {
            nameUser: req.params.nameUser
        },exclude: 'password'
    });
    res.json(user);
} 
const getUserStatusWithName = async (req,res) => {
    let user = await models.user.findOne({
        where: {
            nameUser: req.params.nameUser
        },
        include: models.statusUser,
        exclude: 'password'
    });
    res.status(200).json(user.StatusUser);
}
const getUserCoursesByName = async (req,res) => {
    let user = await models.user.findAll({
        where: {
            nameUser: req.params.nameUser
        },
        include: {
            model: models.datacourse,
            include : {
                model: models.course,
                include: models.statusCourse
            }
        },
        exclude: 'password'
    });
    /* Mostramos solo los cursos del usuario dado */
    let courses = [];
    for(i = 0 ; i<user.length;i++){
        courses.push(user[i].DataCourse.Course);
    }
    res.status(200).json(courses);
}

const getAllUsersDataCourses = async (req,res) => {
    let user = await models.user.findAll({include: {model:models.datacourse, include:{ model: models.course}}});
    /* Mostramos solo los cursos del usuario dado */
    res.status(200).json(user);
}
const postLoginUser = async (req,res) => {
    let user_name = req.body.nameUser;
    let user_pass = req.body.password;

    let user = await models.user.findOne({
        where: {
            nameUser: user_name
        },
    });
    if(user == null){
        res.status(404).json({status: 404, message:'wrong user'})
    }
    
    else if(await bcrypt.compare(user_pass,user.password)){
        res.status(200).json({status: 200, message:'loged ok'})
    }
    else{
        res.status(403).json({status: 403, message:'wrong pass'})
    }
}
const postCreateUser = async (req,res) => {
    let nameUser = req.body.nameUser;
    let surnameUser = req.body.surnameUser;
    let age = req.body.age;
    let email = req.body.email;
    let password = await bcrypt.hash('defaultpassword',4)

    let newUser = {
        StatusUserIdStatusUser: 3,
        nameUser: nameUser ,
        password: password,
        surnameUser:   surnameUser ,
        age: age,
        email: email    
    }
    await models.user.create(newUser); 
    res.status(200).json({status: 200, message:'Succesfully created'})
}

const postDeleteUser = async (req,res) => {
    let nameUser = req.body.nameUser;

    let user = await models.user.findOne({
        where: {
            nameUser: nameUser
        },
        exclude: 'password'
    });

    await user.destroy();   
    res.status(200).json({status: 200, message:'Succesfully deleted'})
}
const postUpdateUser = async (req,res) => {
    let idUser = req.body.idUser;
    let nameUser = req.body.nameUser;
    let surnameUser = req.body.surnameUser;
    let age = req.body.age;
    let email = req.body.email;
    let user = await models.user.findOne({
        where: {
            idUser: idUser
        },
        exclude: 'password'
    });
    console.log(surnameUser)
    await user.update({
        nameUser: nameUser,
        surnameUser: surnameUser,
        age: age,
        email: email
    });   
    res.status(200).json({status: 200, message:'Succesfully updated'})
}

module.exports = {
    getAllUsers, getUserByPK,getUserByName, getUserStatusWithName, getUserCoursesByName, getAllUsersDataCourses,
    postLoginUser, postCreateUser, postDeleteUser, postUpdateUser
};