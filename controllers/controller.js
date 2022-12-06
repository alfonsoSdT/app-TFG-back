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
    res.json(user);
}
const usersStatusUserView = async (req,res) => {
    let user = await models.user.findOne({
        where: {
            nameUser: req.params.nameUser
        },
        include: models.statusUser
    });
    res.status(200).json(user.StatusUser);
}
const usersDataCoursesView = async (req,res) => {
    let user = await models.user.findAll({
        where: {
            nameUser: req.params.nameUser
        },
        include: models.datacourse
    });
    /* Mostramos solo los Data Courses */
    let datacourses = [];
    for(i = 0 ; i<user.length;i++){
        datacourses.push(user[i].DataCourse);
    }
    res.status(200).json(datacourses);

}
const usersCoursesView = async (req,res) => {
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
        }
    });
    /* Mostramos solo los cursos del usuario dado */
    let courses = [];
    for(i = 0 ; i<user.length;i++){
        courses.push(user[i].DataCourse.Course);
    }
    res.status(200).json(courses);
}

const usersAllDataCoursesView = async (req,res) => {
    let user = await models.user.findAll({include: {model:models.datacourse, include:{ model: models.course}}});
    /* Mostramos solo los cursos del usuario dado */
    res.status(200).json(user);
}

/*Courses */

const coursesView = async (req,res) => {
    let course = await models.course.findAll();
    res.json(course);
}
const coursesWithStatusView = async (req,res) => {
    let course = await models.course.findAll( {include: models.statusCourse} );
    res.json(course);
}

const coursesByPkView = async (req,res) => {
    let course = await models.course.findByPk(req.params.idCourse);
    res.json(course);
}
const coursesWithNameView = async (req,res) => {
    let course = await models.course.findOne({
        where: {
            nameCourse: req.params.nameCourse
        }
    });
    res.json(course);
}
const coursesStatusCourseView = async (req,res) => {
    let user = await models.course.findOne({
        where: {
            nameCourse: req.params.nameCourse
        },
        include: models.statusCourse
    });
    res.status(200).json(user.StatusCourse);
}
const coursesDataCoursesWithIdCourseView = async (req,res) => {
    let user = await models.datacourse.findAll({
        where: {
            CourseIdCourse: req.params.idCourse
        }
    });
    res.status(200).json(user);
}
const coursesDataCoursesWithNameCourseView = async (req,res) => {
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

/*Data Courses */

const dataCoursesView = async (req,res) => {
    let datacourse = await models.datacourse.findAll();
    res.json(datacourse);
}
const dataCoursesByPkView = async (req,res) => {
    let datacourse = await models.datacourse.findByPk(req.params.idDataCourse);
    res.json(datacourse);
}
const dataCoursesCoursesView = async (req,res) => {
    let datacourse = await models.datacourse.findOne({
        where: {
            idDataCourse: req.params.idDataCourse
        },
        include: models.course
    });
    res.status(200).json(datacourse.Course);
}


/*Status Courses */

const statusCoursesView = async (req,res) => {
    let statusCourse = await models.statusCourse.findAll();
    res.json(statusCourse);
}
const statusCoursesByPkView = async (req,res) => {
    let statusCourse = await models.statusCourse.findByPk(req.params.idStatusCourse);
    res.json(statusCourse);
}
const statusCoursesWithNameView = async (req,res) => {
    let statusCourse = await models.statusCourse.findOne({
        where: {
            statusCourseName: req.params.statusCourseName
        }
    });
    res.json(statusCourse);
}

/* Status user */

const statusUserView = async (req,res) => {
    let statusUser = await models.statusUser.findAll();
    res.json(statusUser);
}
const statusUserByPkView = async (req,res) => {
    let statusUser = await models.statusUser.findByPk(req.params.idStatusUser);
    res.json(statusUser);
}
const statusUserWithNameView = async (req,res) => {
    let statusUser = await models.statusUser.findOne({
        where: {
            statusUserName: req.params.statusUserName
        }
    });
    res.json(statusUser);
}

module.exports = {
    usersView, usersByPkView, usersWithNameView, usersStatusUserView, usersDataCoursesView, usersCoursesView, usersAllDataCoursesView,
    coursesView, coursesWithStatusView , coursesByPkView, coursesWithNameView, coursesStatusCourseView, coursesDataCoursesWithIdCourseView, coursesDataCoursesWithNameCourseView,
    dataCoursesView, dataCoursesByPkView, dataCoursesCoursesView,
    statusCoursesView , statusCoursesByPkView, statusCoursesWithNameView,
    statusUserView, statusUserByPkView , statusUserWithNameView
};