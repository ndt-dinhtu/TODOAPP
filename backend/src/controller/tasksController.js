import Task from "../models/Task.js";

export const getAllTasks = async (request, respone) => {
  try {
    // Lấy tất cả task trong MongoDB, sắp xếp theo thời gian tạo mới nhất (createdAt giảm dần)
    // const tasks = await Task.find().sort({ createdAt: -1 });

    // Đếm số lượng task có status = "active" (nhiệm vụ đang hoạt động / chưa hoàn thành)
    // const activeCount = await Task.countDocuments({ status: "active" });

    // Đếm số lượng task có status = "complete" (nhiệm vụ đã hoàn thành)
    // const completedCount = await Task.countDocuments({ status: "complete" });

    const result = await Task.aggregate([
      {
        $facet: {
          tasks: [{ $sort: { createdAt: -1 } }],
          activeCount: [{ $match: { status: "active" } }, { $count: "count" }],
          completeCount: [
            { $match: { status: "complete" } },
            { $count: "count" },
          ],
        },
      },
    ]);

    const tasks = result[0].tasks;
    const activeCount=result[0].activeCount[0]?.count||0
    const completeCount = result[0].completeCount[0]?.count ||0
    respone.status(200).json({tasks,activeCount,completeCount});
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

export const deleteTask = async (request, respone) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(request.params.id);
    if (!deleteTask) {
      return respone.status(404).json({ message: "Khong thi thay nhiem vu" });
    }
    respone.status(200).json({ message: "Xoa task thanh cong", deleteTask });
  } catch (error) {
    console.error("Loi khi goi deleteTask", error);
    respone.status(500).json({ message: "Loi he thong" });
  }
};
