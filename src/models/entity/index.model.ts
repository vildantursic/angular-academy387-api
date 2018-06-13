import mongoose from 'mongoose';
import entitySchema from './index.schema';

const Entity = mongoose.model('Entity', entitySchema);
export default Entity;
