const models = require("../models");

/*Status Courses */

const getAllStatusCourse = async (req,res) => {
    let statusCourse = await models.statusCourse.findAll();
    res.json(statusCourse);
}
const getStatusCourseByPK = async (req,res) => {
    let statusCourse = await models.statusCourse.findByPk(req.params.idStatusCourse);
    res.json(statusCourse);
}
const getStatusCourseByName = async (req,res) => {
    let statusCourse = await models.statusCourse.findOne({
        where: {
            statusCourseName: req.params.statusCourseName
        }
    });
    res.json(statusCourse);
}

/* Status user */

const getAllStatusUser = async (req,res) => {
    let statusUser = await models.statusUser.findAll();
    res.json(statusUser);
}
const getStatusUserByPK = async (req,res) => {
    let statusUser = await models.statusUser.findByPk(req.params.idStatusUser);
    res.json(statusUser);
}
const getStatusUserByName = async (req,res) => {
    let statusUser = await models.statusUser.findOne({
        where: {
            statusUserName: req.params.statusUserName
        }
    });
    res.json(statusUser);
}

module.exports = {
    getAllStatusCourse,getStatusCourseByPK, getStatusCourseByName,
    getAllStatusUser, getStatusUserByPK, getStatusUserByName
};