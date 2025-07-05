import mongoose, { Document, Schema } from 'mongoose';

export const RecordType = {
  ENTRY: 'entry',
  EXIT: 'exit',
} as const;

export type RecordType = (typeof RecordType)[keyof typeof RecordType];

export interface IRecord extends Document {
  employeeId: mongoose.Types.ObjectId;
  type: RecordType;
  actualTimestamp: Date;
  selectedTimestamp: Date;
}

const RecordSchema = new Schema<IRecord>({
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

const Record = mongoose.model<IRecord>('Record', RecordSchema);

export default Record;
