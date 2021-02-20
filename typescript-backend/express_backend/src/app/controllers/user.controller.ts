import { IUser, UserModel } from "./../models/user.model";

interface ICreateUserInput {
  email: IUser["email"];
  firstName: IUser["firstName"];
  lastName: IUser["lastName"];
}

export const UserController = {
  createUser: async ({
    email,
    firstName,
    lastName,
  }: ICreateUserInput): Promise<IUser> => {
    return UserModel.create({
      email,
      firstName,
      lastName,
    })
      .then((data: IUser) => {
        return data;
      })
      .catch((err: Error) => {
        throw err;
      });
  },
};
