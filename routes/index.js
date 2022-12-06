const express = require('express');

const { usersView, usersByPkView , usersWithNameView, usersStatusUserView, usersDataCoursesView, usersCoursesView, usersAllDataCoursesView,
    coursesView , coursesWithStatusView,  coursesByPkView, coursesWithNameView, coursesStatusCourseView, coursesDataCoursesWithIdCourseView, coursesDataCoursesWithNameCourseView,
    dataCoursesView , dataCoursesByPkView , dataCoursesCoursesView, 
    statusCoursesView , statusCoursesByPkView, statusCoursesWithNameView,
    statusUserView , statusUserByPkView, statusUserWithNameView } 
    = require('../controllers/controller')

const router = express.Router();

/* GET home page. */

/* Users */

router.get('/users',usersView);
router.get('/users/id/:idUser',usersByPkView);
router.get('/users/datacourses', usersAllDataCoursesView); 

router.get('/users/name/:nameUser', usersWithNameView);
router.get('/users/name/:nameUser/status', usersStatusUserView); 
router.get('/users/name/:nameUser/datacourses', usersDataCoursesView); 
router.get('/users/name/:nameUser/courses', usersCoursesView);
/* Courses */

router.get('/courses',coursesView);
router.get('/courses/status',coursesWithStatusView);
router.get('/courses/id/:idCourse',coursesByPkView);
router.get('/courses/id/:idCourse/datacourses',coursesDataCoursesWithIdCourseView);

router.get('/courses/name/:nameCourse',coursesWithNameView);
router.get('/courses/name/:nameCourse/status',coursesStatusCourseView);
router.get('/courses/name/:nameCourse/datacourses',coursesDataCoursesWithNameCourseView);

/* Data Courses */

router.get('/datacourses',dataCoursesView);
router.get('/datacourses/id/:idDataCourse',dataCoursesByPkView);
router.get('/datacourses/id/:idDataCourse/courses', dataCoursesCoursesView); 

/* Status Courses */

router.get('/statuscourses',statusCoursesView);
router.get('/statuscourses/id/:idStatusCourse',statusCoursesByPkView);
router.get('/statuscourses/name/:statusCourseName',statusCoursesWithNameView);

/* Status Users */

router.get('/statususers',statusUserView);
router.get('/statususers/id/:idStatusUser',statusUserByPkView);
router.get('/statususers/name/:statusUserName',statusUserWithNameView);

module.exports = router;
