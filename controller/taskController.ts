import { Request, Response } from "express";
import taskModel from "../model/taskModel";
import mongoose from "mongoose";
import authModel from "../model/authModel";

export const createTask = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const user = await authModel.findById( userID );

    if (user) {
      const { title, description } = req.body;
      const task = await taskModel.create({
        title,
        users: user?._id,
        description,
      });
user?.tasks?.push(new mongoose.Types.ObjectId(task?._id));
user?.save();
return res.status(201).json({
  message: "Task Created ",
  data: task,
});
    } else {
      return res.status(404).json({
        message: "Error invalid user"

      });
    }
  } catch (error:any) {
    return res.status(404).json({
      message: `Error ${error.message}`,
      info: error
    });
  }
};

// export const createTask = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   try {
//     const { userID } = req.params;
//     const user = await authModel.findById(userID);

//     if (user) {
//       const { title, description } = req.body;

//       const tasked = await taskModel.create({ title, description, userID });
//       user?.tasks?.push(new mongoose.Types.ObjectId(tasked?.id));
//       user?.save();
//       return res.status(201).json({
//         message: "Task Created ",
//         data: tasked,
//       });
//     } else {
//       return res.status(404).json({
//         message: "Error",
//       });
//     }
//   } catch (error) {
//     return res.status(404).json({
//       message: "Task cannot be created",
//     });
//   }
// };

export const getTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const tasked = await taskModel.find().sort({ createdAt: -1 });
    return res.status(200).json({
      message: "Viewing all Task",
      data: tasked,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Task cannot be Viewed",
    });
  }
};

export const getOneTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const tasked = await taskModel.findById(id);

    return res.status(200).json({
      message: "Viewing Task",
      data: tasked,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Task cannot be View",
    });
  }
};

export const updateOneTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const tasked = await taskModel.findByIdAndUpdate(
      id,
      {
        isComplete: true,
      },
      { new: true }
    );

    return res.status(201).json({
      message: "Task updated",
      data: tasked,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Task cannot be updated",
    });
  }
};

export const deleteOneTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const tasked = await taskModel.findByIdAndDelete(id);

    return res.status(201).json({
      message: "Task deleted",
      data: tasked,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Task cannot be delete",
    });
  }
};
