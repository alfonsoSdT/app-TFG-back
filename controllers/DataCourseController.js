const models = require("../models");
/*Data Courses */

const getAllDataCourses = async (req,res) => {
    let datacourse = await models.datacourse.findAll();
    res.json(datacourse);
}
const getAllDataCoursesByPK = async (req,res) => {
    let datacourse = await models.datacourse.findByPk(req.params.idDataCourse);
    res.json(datacourse);
}
const getAllDataCoursesById = async (req,res) => {
    let datacourse = await models.datacourse.findOne({
        where: {
            idDataCourse: req.params.idDataCourse
        },
        include: models.course
    });
    res.status(200).json(datacourse.Course);
}
const postCreateDataCourse = async (req,res) => {
    /*Creating a Course for the user (optional)*/
    let idUser = req.body.idUser;
    let nameCourse = req.body.nameCourse;
    let dateCertified = req.body.dateCertified;
    let dateExpired = req.body.dateExpired; 
    let hoursNeeded = req.body.hoursNeeded;
    let pricePerHour = req.body.pricePerHour;
    /*Look up for the idCourse */
    let course = await models.course.findOne({
        where: {
            nameCourse: nameCourse
        }
    });
    /*Create the dataCourse*/
    let newDataCourse = {
        UserIdUser: idUser,
        CourseIdCourse: course.idCourse,
        dateCertified: dateCertified,
        dateExpired: dateExpired,
        hoursNeeded:hoursNeeded,
        pricePerHour:pricePerHour
    }
    let c = await models.datacourse.findOne({
        where:{
            UserIdUser:idUser,
            CourseIdCourse: course.idCourse
        }
    })
    if(c!= null){
        res.status(400).json({status: 400, message:'Already got that course'})
    }
    else{
        await models.datacourse.create(newDataCourse)
        res.status(200).json({status: 200, message:'Succesfully created'})
    }
}

module.exports = {
    getAllDataCourses, getAllDataCoursesByPK , getAllDataCoursesById, 
    postCreateDataCourse
}