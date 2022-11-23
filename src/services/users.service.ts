import * as bcrypt from 'bcrypt';
import HttpException from '../exceptions/HttpException';
import { User, UsersInterface } from '../interfaces/users.interface';
import userModel from '../models/users.model';
import { isEmptyObject } from '../utils/util';
import sendMail from '../utils/sendgrid';
import * as jwt from 'jsonwebtoken';
class UserService {
  public users = userModel;

  public async findAllUser(): Promise<User[]> {
    const users: User[] = await this.users.find();
    return users;
  }

  public async findUserById(userId: string): Promise<User> {
    const findUser: User = await this.users.findById(userId);
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }

  public async createUser(userData: UsersInterface): Promise<User> {
    if (isEmptyObject(userData)) {

      throw new HttpException(400, "You're not userData");

    }

    const findUser = await this.users.findOne({ email: userData.email });
    if (findUser) throw new HttpException(409, `You're email ${userData.email} already exists`);

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const createUserData: any = await this.users.create({ ...userData, password: hashedPassword });

    delete createUserData.password;
    return createUserData;
  }

  public async updateUser(userId: string, userData: User): Promise<User> {
    if (isEmptyObject(userData)) throw new HttpException(400, "You're not userData");

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const updateUserById: User = await this.users.findByIdAndUpdate(userId, { ...userData, password: hashedPassword });
    if (!updateUserById) throw new HttpException(409, "You're not user");

    return updateUserById;
  }

  public async deleteUserData(userId: string): Promise<User> {
    const deleteUserById: User = await this.users.findByIdAndDelete(userId);
    if (!deleteUserById) throw new HttpException(409, "You're not user");

    return deleteUserById;
  }
}

export default UserService;
