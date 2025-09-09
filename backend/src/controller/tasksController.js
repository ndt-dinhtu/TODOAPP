import Task from "../models/Task.js";

export const getAllTasks = async (request, respone) => {
  try {
    const tasks = await Task.find().sort({createAt:-1});
    respone.status(200).json({ tasks });
  } catch (error) {
    console.error("Lỗi khi lấy Task: ", error);
    respone.status(500).json({ message: "Lỗi hệ thống" });
  }
};
export const createTask = async (request, respone) => {
  try {
    const { title } = request.body;
    const task = new Task({ title });
    const newTask = await task.save();
    respone.status(200).json(newTask);
  } catch (error) {
    console.error("Loi khi chay ham createTask", error);
    respone.status(500).json({ message: "Loi he thong" });
  }
};

export const updateTask = async (request, respone) => {
  try {
    const { title, status, completedAt } = request.body;
    const updateTask = await Task.findByIdAndUpdate(
      request.params.id,
      {
        title,
        status,
        completedAt,
      },
      { new: true }
    );
    if (!updateTask) {
      return respone.status(404).json({ message: "Khong tim thay nhiem vu" });
    }
    respone.status(200).json(updateTask);
  } catch (error) {
    console.error("Loi khi chay ham updateTask", error);
    respone.status(500).json({ message: "Loi he thong" });
  }
};

export const deleteTask = async(request, respone) => {
  try {
    const deleteTask =await Task.findByIdAndDelete(request.params.id);
    if (!deleteTask) {
      return respone.status(404).json({ message: "Khong thi thay nhiem vu" });
    }
    respone.status(200).json({message:"Xoa task thanh cong",deleteTask});
  } catch (error) {
    console.error("Loi khi goi deleteTask", error);
    respone.status(500).json({ message: "Loi he thong" });
  }
};
