import User from "../models/user";

export const createUser = async (user: string) => {
  const newUser = new User({
    user: user,
  });

  try {
    return newUser.save();
  } catch (error) {
    throw new Error("Error while creating user");
  }
};
