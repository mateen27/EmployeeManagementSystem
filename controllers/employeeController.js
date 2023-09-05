const express = require('express');

const router = express.Router()
// simple adds the previous url's with next url's

const Employee = require('../models/employee.model')

router.get('/' , (req , res) =>{
    res.render('home')
})

//API for inserting the DATA
router.post('/' , (req , res) => {
    const emp = new Employee();
    emp.fullName = req.body.fullName;
    emp.email = req.body.email;
    emp.mobile = req.body.mobile;
    emp.city = req.body.city;

    emp.save()
        .then(result => {
            res.redirect('/employee/show')
        })
})

// for showing the Employee Details
router.get('/show' , (req , res) => {
    Employee.find()
        .then(result => {
            res.render('showEmployee' , {list : result})
        })
})

// for updating the Employee Information
router.get('/:id' , (req , res) => {
    Employee.findById(req.params.id)
        .then(result => console.log(result))
})

// for deleting 
router.get('/del/:id' , (req , res) => {
    Employee.findByIdAndDelete(req.params.id)
        .then(result => res.redirect('/employee/show'))
})

module.exports = router