const models = require("../models");
/*Courses */

const getAllCourses = async (req,res) => {
    let course = await models.course.findAll();
    res.json(course);
}
const getAllCoursesWithStatus = async (req,res) => {
    let course = await models.course.findAll( {include: models.statusCourse} );
    res.json(course);
}

const getCourseByPK = async (req,res) => {
    let course = await models.course.findByPk(req.params.idCourse);
    res.json(course);
}

const getCourseByName = async (req,res) => {
    let course = await models.course.findOne({
        where: {
            nameCourse: req.params.nameCourse
        }
    });
    res.json(course);
}
const getCourseWithStatusByName = async (req,res) => {
    let user = await models.course.findOne({
        where: {
            nameCourse: req.params.nameCourse
        },
        include: models.statusCourse
    });
    res.status(200).json(user.StatusCourse);
}

const getAllDataCoursesOfCourseByID = async (req,res) => {
    let user = await models.datacourse.findAll({
        where: {
            CourseIdCourse: req.params.idCourse
        }
    });
    res.status(200).json(user);
}

const getAllDataCoursesOfCourseByName = async (req,res) => {
    let course = await models.course.findOne({
        where: {
            nameCourse: req.params.nameCourse
        }
    });
    let datacoursess = await models.datacourse.findAll({
        where: {
            CourseIdCourse: course.idCourse
        }
    })
    res.status(200).json(datacoursess);
}
const postCreateCourse = async (req,res) => {
    let nameCourse = req.body.nameCourse;
    let moreInfo = req.body.moreInfo;
    let hoursNeeded = req.body.hoursNeeded;
    let pricePerHour = req.body.pricePerHour;

    let newCourse = {
        StatusCourseIdStatusCourse: 2,
        nameCourse: nameCourse ,
        moreInfo:   moreInfo,
        hoursNeeded: hoursNeeded,
        pricePerHour: pricePerHour      
    }
    await models.course.create(newCourse);   
    res.status(200).json({status: 200, message:'Succesfully created'})
}

const postDeleteCourse = async (req,res) => {
    let nameCourse = req.body.nameCourse;

    let course = await models.course.findOne({
        where: {
            nameCourse: nameCourse
        }
    });

    await course.destroy();   
    res.status(200).json({status: 200, message:'Succesfully deleted'})
}
const postUpdateCourse = async (req,res) => {
    let idCourse = req.body.idCourse;
    let nameCourse = req.body.nameCourse;
    let moreInfo = req.body.moreInfo;
    let hoursNeeded = req.body.hoursNeeded;
    let pricePerHour = req.body.pricePerHour;

    let course = await models.course.findOne({
        where: {
            idCourse: idCourse
        }
    });

    await course.update({
        nameCourse: nameCourse,
        moreInfo : moreInfo,
        hoursNeeded: hoursNeeded,
        pricePerHour: pricePerHour
    });   
    res.status(200).json({status: 200, message:'Succesfully updated'})
}

module.exports = {getAllCourses,getAllCoursesWithStatus,getCourseByPK, getCourseByName, getCourseWithStatusByName,getAllDataCoursesOfCourseByID,
     getAllDataCoursesOfCourseByName, postCreateCourse, postDeleteCourse, postUpdateCourse }