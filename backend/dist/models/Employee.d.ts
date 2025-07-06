import mongoose, { Document } from "mongoose";
export interface IEmployee extends Document {
    _id: mongoose.Types.ObjectId;
    fullName: string;
    email: string;
    dni: string;
}
declare const Employee: mongoose.Model<IEmployee, {}, {}, {}, mongoose.Document<unknown, {}, IEmployee, {}> & IEmployee & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default Employee;
