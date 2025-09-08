const express=require("express");
const router=express.Router()
//const exportuser=require('../controller/newStudentList')
//const exportuser1=require('../controller/newCoursesList')
const student1=require('../controller/studentdata');
const postuser=require('../controller/usersignup')
const getuser=require('../controller/getuserdata')
const getuser1=require('../controller/getuserdata1')
const findstu=require('../controller/findingRec')
const getDogs=require('../controller/dogsList')
const contactus=require('../controller/contactbyuser')
const shopRoutes = require('../controller/petshop');


//router.get('/',exportuser.studentList)
//router.get('/getuserlist',exportuser.studentList)
//router.get('/getname',exportuser.studentList)
router.get('/pets/:id',getDogs.dogbyid)
router.get('/dogsList',getDogs.dogList)
router.get('/dogsList/:id',getDogs.finddogList)
router.get('/getpetshop',shopRoutes.getpetshop)
router.get('/petShops/:id',shopRoutes.petShopById)
router.get('/findingrecord',findstu.findingRec)

router.post('/getuserdata1',getuser1.SearchuserData1)
router.post('/poststudentlist',exportuser.PoststudentList)
router.post('/getuserdata',getuser.SearchuserData)
//router.post('/createCourse',exportuser1.coursesList)
router.post('/studentData',student1.studentdata)
router.post('/userData',postuser.pushusers)
router.post('/contactus',contactus.contactByUser)
router.post('/addpetshop',shopRoutes.addpetShop)

module.exports= router;
