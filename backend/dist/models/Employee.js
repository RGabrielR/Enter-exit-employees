import mongoose, { Schema } from "mongoose";
const EmployeeSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    dni: {
        type: String,
        required: true,
        unique: true,
    },
});
const Employee = mongoose.model("Employee", EmployeeSchema);
export default Employee;
