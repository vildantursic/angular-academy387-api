import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  active: {
    type: Boolean,
    default: true
  }
}, {timestamps: true});

export default projectSchema;
