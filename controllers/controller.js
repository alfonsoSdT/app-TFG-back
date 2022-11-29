const models = require("../models");


/* Users */

const usersView = async (req,res) => {
    let user = await models.user.findAll();
    /*console.log(JSON.stringify(user));*/
    res.json(user);
}
const usersByPkView = async (req,res) => {
    let user = await models.user.findByPk(req.params.idUser);
    /*console.log(JSON.stringify(user));*/
    res.json(user);
}
const usersWithNameView = async (req,res) => {
    let user = await models.user.findAll({
        where: {
            nameUser: req.params.nameUser
        }
    });
    //console.log(JSON.stringify(datacourse));
    res.json(user);
}
const usersStatusUserView = async (req,res) => {
    let user = await models.user.findOne({
        where: {
            nameUser: req.params.nameUser
        }
    });
    //let statusUser = await user.getStatusUserIdStatusUser();
    //console.log(JSON.stringify(datacourse));
    res.json(user);
    //res.json(statusUser);
}
const usersDataCoursesView = async (req,res) => {
    let user = await models.user.findOne({
        where: {
            nameUser: req.params.nameUser
        }
    });
    //console.log(JSON.stringify(datacourse));
    let datacourse = await user.getDataCourse();
    res.status(200).json(datacourse);
}
/*Courses */

const coursesView = async (req,res) => {
    let course = await models.course.findAll();
    /*console.log(JSON.stringify(course));*/
    res.json(course);
}
const coursesByPkView = async (req,res) => {
    let course = await models.course.findByPk(req.params.idCourse);
    //console.log(JSON.stringify(course)) ;//
    res.json(course);
}
const coursesWithNameView = async (req,res) => {
    let course = await models.course.findAll({
        where: {
            nameCourse: req.params.nameCourse
        }
    });
    //console.log(JSON.stringify(datacourse));
    res.json(course);
}

/*Data Courses */

const dataCoursesView = async (req,res) => {

    let datacourse = await models.datacourse.findAll();
    //console.log(JSON.stringify(datacourse));
    res.json(datacourse);
}
const dataCoursesByPkView = async (req,res) => {
    let datacourse = await models.datacourse.findByPk(req.params.idDataCourse);
    //console.log(JSON.stringify(datacourse));
    res.json(datacourse);
}
const dataCoursesWithNameView = async (req,res) => {
    let datacourse = await models.statusCourse.findAll({
        where: {
            statusCourseName: req.params.statusCourseName
        }
    });
    //console.log(JSON.stringify(datacourse));
    res.json(statusCourse);
}
/*Status Courses */

const statusCoursesView = async (req,res) => {
    let statusCourse = await models.statusCourse.findAll();
    //console.log(JSON.stringify(statusCourse));
    res.json(statusCourse);
}
const statusCoursesByPkView = async (req,res) => {
    let statusCourse = await models.statusCourse.findByPk(req.params.idStatusCourse);
    //console.log(JSON.stringify(datacourse));
    res.json(statusCourse);
}
const statusCoursesWithNameView = async (req,res) => {
    let statusCourse = await models.statusCourse.findAll({
        where: {
            statusCourseName: req.params.statusCourseName
        }
    });
    //console.log(JSON.stringify(datacourse));
    res.json(statusCourse);
}

/* Status user */

const statusUserView = async (req,res) => {
    let statusUser = await models.statusUser.findAll();
    //console.log(JSON.stringify(statusUser));
    res.json(statusUser);
}
const statusUserByPkView = async (req,res) => {
    let statusUser = await models.statusUser.findByPk(req.params.idStatusUser);
    //console.log(JSON.stringify(datacourse));
    res.json(statusUser);
}
const statusUserWithNameView = async (req,res) => {
    let statusUser = await models.statusUser.findAll({
        where: {
            statusUserName: req.params.statusUserName
        }
    });
    //console.log(JSON.stringify(datacourse));
    res.json(statusUser);
}

module.exports = {
    usersView, usersByPkView, usersWithNameView, usersStatusUserView, usersDataCoursesView,
    coursesView, coursesByPkView, coursesWithNameView,
    dataCoursesView, dataCoursesByPkView,
    statusCoursesView , statusCoursesByPkView, statusCoursesWithNameView,
    statusUserView, statusUserByPkView , statusUserWithNameView
};