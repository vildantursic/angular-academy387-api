import mongoose from 'mongoose';
import complexSchema from './index.schema';

const Complex = mongoose.model('Complex', complexSchema);
export default Complex;
