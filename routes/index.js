const express = require('express');

const { usersView, usersByPkView , 
    coursesView , coursesByPkView, 
    dataCoursesView , dataCoursesByPkView ,
     statusCoursesView , statusCoursesByPkView, 
    statusUserView , statusUserByPkView } 
    = require('../controllers/controller')

const router = express.Router();

/* GET home page. */

/* Users */

router.get('/users',usersView);
router.get('/users/:idUser',usersByPkView);

/* Courses */

router.get('/courses',coursesView);
router.get('/courses/:idCourse',coursesByPkView);

/* Data Courses */

router.get('/datacourses',dataCoursesView);
router.get('/datacourses/:idDataCourse',dataCoursesByPkView);

/* Status Courses */

router.get('/statuscourses',statusCoursesView);
router.get('/statuscourses/:idStatusCourse',statusCoursesByPkView);

/* Status Users */

router.get('/statususers',statusUserView);
router.get('/statususers/:idStatusUser',statusUserByPkView);

module.exports = router;
