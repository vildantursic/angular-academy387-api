import mongoose from 'mongoose';

const bimModelSchema = new mongoose.Schema({
  name: String,
  type: {
    type: Number,
    enum: [0, 1, 2, 3, 4, 5]
  },
  active: Boolean,
  data: Array
}, {timestamps: true});

export default bimModelSchema;
