import mongoose from 'mongoose';

const ActivitySchema = new mongoose.Schema({
  userId: String,
  name: String,
  description: String,
  image: String,
}, { timestamps: true });

export default mongoose.model('Activity', ActivitySchema);
