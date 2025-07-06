import mongoose, { Schema } from 'mongoose';
export const RecordType = {
    ENTRY: 'entry',
    EXIT: 'exit',
};
const RecordSchema = new Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    type: {
        type: String,
        enum: Object.values(RecordType),
        required: true
    },
    actualTimestamp: {
        type: Date,
        required: true,
        default: Date.now
    },
    selectedTimestamp: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});
const Record = mongoose.model('Record', RecordSchema);
export default Record;
