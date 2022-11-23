import * as mongoose from 'mongoose';
import { User } from '../interfaces/users.interface';

const userSchema = new mongoose.Schema({
  civility: String,
  first_name: String,
  last_name: String,
  birthdate: String,
  birthplace: String,
  email: String,
  password: String,
  status: String,
  roles: [String],
});

const userModel = mongoose.model<User & mongoose.Document>('User', userSchema);

export default userModel;
