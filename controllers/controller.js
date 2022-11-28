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

module.exports = {
    usersView, usersByPkView, 
    coursesView, coursesByPkView,
    dataCoursesView, dataCoursesByPkView,
    statusCoursesView , statusCoursesByPkView,
    statusUserView, statusUserByPkView
};