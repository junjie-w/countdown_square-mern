import mongoose from 'mongoose';
const { Schema } = mongoose;

const cardSchema = new Schema({
  title: String,
  toDateYear: Number,
  toDateMonth: Number,
  toDateDay: Number,
  toDateHour: Number,
  toDateMinute: Number,
  toDateSecond: Number,
  selectedDate: Date
  //days: Number,
  //hours: Number,
  //minutes: Number,
  //seconds: Number
})

export default mongoose.model('Card', cardSchema);