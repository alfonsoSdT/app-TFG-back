const express = require('express');
const {getAllUsers, getUserByPK, getUserByName, getUserStatusWithName, getUserCoursesByName, getAllUsersDataCourses, 
    postLoginUser, postCreateUser, postDeleteUser, postUpdateUser
} = require('../controllers/UserController')
const {getAllCourses,getAllCoursesWithStatus,getCourseByPK, getCourseByName, getCourseWithStatusByName,getAllDataCoursesOfCourseByID,
     getAllDataCoursesOfCourseByName, postCreateCourse, postDeleteCourse, postUpdateCourse} = require ('../controllers/CoursesController')
const {getAllDataCourses, getAllDataCoursesByPK , getAllDataCoursesById,
        postCreateDataCourse} = require('../controllers/DataCourseController')

const {getAllStatusCourse,getStatusCourseByPK, getStatusCourseByName, getAllStatusUser, getStatusUserByPK, getStatusUserByName} 
    = require('../controllers/controller')

const router = express.Router();


/* Users */

router.get('/users',getAllUsers);

router.post('/users/login',postLoginUser);
router.post('/users/create',postCreateUser);
router.post('/users/delete',postDeleteUser);
router.post('/users/update',postUpdateUser);

router.get('/users/id/:idUser',getUserByPK);
router.get('/users/datacourses', getAllUsersDataCourses); 

router.get('/users/name/:nameUser', getUserByName);
router.get('/users/name/:nameUser/status', getUserStatusWithName); 
router.get('/users/name/:nameUser/courses', getUserCoursesByName);
/* Courses */

router.get('/courses',getAllCourses);

router.post('/courses/create',postCreateCourse);
router.post('/courses/delete',postDeleteCourse);
router.post('/courses/update',postUpdateCourse);

router.get('/courses/status',getAllCoursesWithStatus);
router.get('/courses/id/:idCourse',getCourseByPK);
router.get('/courses/id/:idCourse/datacourses',getAllDataCoursesOfCourseByID);

router.get('/courses/name/:nameCourse',getCourseByName);
router.get('/courses/name/:nameCourse/status',getCourseWithStatusByName);
router.get('/courses/name/:nameCourse/datacourses',getAllDataCoursesOfCourseByName);

/* Data Courses */

router.post('/datacourses/create',postCreateDataCourse);

router.get('/datacourses',getAllDataCourses);
router.get('/datacourses/id/:idDataCourse',getAllDataCoursesByPK);
router.get('/datacourses/id/:idDataCourse/courses', getAllDataCoursesById); 

/* Status Courses */

router.get('/statuscourses',getAllStatusCourse);
router.get('/statuscourses/id/:idStatusCourse',getStatusCourseByPK);
router.get('/statuscourses/name/:statusCourseName',getStatusCourseByName);

/* Status Users */

router.get('/statususers',getAllStatusUser);
router.get('/statususers/id/:idStatusUser',getStatusUserByPK);
router.get('/statususers/name/:statusUserName',getStatusUserByName);

module.exports = router;
