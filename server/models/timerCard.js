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
  selectedDate: Date,
  publicCountdown: Boolean,
  personalCountdown: Boolean,
  timerId: String,
  //userName: String,
  //userEmail: String,
  userToken: String,
  userName: String,
  userEmail: String
  //days: Number,
  //hours: Number,
  //minutes: Number,
  //seconds: Number
})

export default mongoose.model('Card', cardSchema);