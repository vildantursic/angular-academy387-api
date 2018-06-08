import mongoose from 'mongoose';
import projectSchema from './index.schema';

const Project = mongoose.model('Project', projectSchema);
export default Project;
