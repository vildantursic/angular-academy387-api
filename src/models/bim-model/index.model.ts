import mongoose from 'mongoose';
import bimModelSchema from './index.schema';

const BimModel = mongoose.model('BimModel', bimModelSchema);
export default BimModel;
