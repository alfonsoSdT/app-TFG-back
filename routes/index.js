const express = require('express');

const { usersView, usersByPkView , usersWithNameView,
    coursesView , coursesByPkView, coursesWithNameView,
    dataCoursesView , dataCoursesByPkView ,
    statusCoursesView , statusCoursesByPkView, statusCoursesWithNameView,
    statusUserView , statusUserByPkView, statusUserWithNameView } 
    = require('../controllers/controller')

const router = express.Router();

/* GET home page. */

/* Users */

router.get('/users',usersView);
router.get('/users/:idUser',usersByPkView);
router.get('/users/name/:nameUser', usersWithNameView);

/* Courses */

router.get('/courses',coursesView);
router.get('/courses/:idCourse',coursesByPkView);
router.get('/courses/name/:nameCourse',coursesWithNameView);

/* Data Courses */

router.get('/datacourses',dataCoursesView);
router.get('/datacourses/:idDataCourse',dataCoursesByPkView);


/* Status Courses */

router.get('/statuscourses',statusCoursesView);
router.get('/statuscourses/:idStatusCourse',statusCoursesByPkView);
router.get('/statuscourses/name/:statusCourseName',statusCoursesWithNameView);

/* Status Users */

router.get('/statususers',statusUserView);
router.get('/statususers/:idStatusUser',statusUserByPkView);
router.get('/statususers/name/:statusUserName',statusUserWithNameView);

module.exports = router;
