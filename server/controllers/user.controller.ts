import { Request, Response } from "express";
import { createUser } from "../services/user.services";

export const createUserController = async (req: Request, res: Response) => {
  const user = req.body.username;
  try {
    const createdUser = await createUser(user);
    res.status(200).json({
      isError: false,
      data: createdUser,
      message: "User Added Succesfully!",
    });
  } catch (error: any) {
    res.status(400).json({
      isError: true,
      message: error.message,
    });
  }
};
