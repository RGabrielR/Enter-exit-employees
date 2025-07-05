import mongoose, {Document, Schema} from "mongoose";

export interface IEmployee extends Document {
    _id: mongoose.Types.ObjectId;
    fullName: string;
    email: string;
    dni: string;
}

const EmployeeSchema = new Schema<IEmployee>({
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

const Employee = mongoose.model<IEmployee>("Employee", EmployeeSchema);

export default Employee;
