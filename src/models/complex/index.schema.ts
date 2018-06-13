import mongoose from 'mongoose';

const complexSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  },
  location: Array,
}, {timestamps: true});

export default complexSchema;
