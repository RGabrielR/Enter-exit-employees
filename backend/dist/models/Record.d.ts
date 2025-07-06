import mongoose, { Document } from 'mongoose';
export declare const RecordType: {
    readonly ENTRY: "entry";
    readonly EXIT: "exit";
};
export type RecordType = (typeof RecordType)[keyof typeof RecordType];
export interface IRecord extends Document {
    employeeId: mongoose.Types.ObjectId;
    type: RecordType;
    actualTimestamp: Date;
    selectedTimestamp: Date;
}
declare const Record: mongoose.Model<IRecord, {}, {}, {}, mongoose.Document<unknown, {}, IRecord, {}> & IRecord & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default Record;
