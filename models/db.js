const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb+srv://khanmateen27:1234567890@cluster0.yduwicq.mongodb.net/EmployeeManagementSystem`);
        console.log('MongoDB Connected Successfulyy');
    } catch (error) {
        console.log('MongoDB Failed to connect' , error);
    }
}

module.exports = connectDB