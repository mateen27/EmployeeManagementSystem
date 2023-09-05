const mongoose = require('mongoose');

let employeeSchema = new mongoose.Schema({
    fullName : {
        type:String
    } , 
    email : {
        type : String
    } , 
    mobile : {
        type : String
    } , 
    city : {
        type : String
    }
})

let employee = mongoose.model('Employee' , employeeSchema)

module.exports = employee