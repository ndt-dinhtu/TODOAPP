import React from "react";
import TaskEmptyState from "./TaskEmptyState";
import TaskCard from "./TaskCard";

const TaskList = () => {
  let filter = "all";

  const filteredTasks = [
    {
      _id: "1",
      title: "hoc reactjs",
      status: "active",
      completedAt: null,
      createAt: new Date(),
    },
    {
      _id: "1",
      title: "hoc reactjs",
      status: "complete",
      completedAt: new Date(),
      createAt: new Date(),
    },
  ];

  // Trang trống
  if (!filteredTasks || filteredTasks.length === 0) {
    return <TaskEmptyState filter={filter} />;
  }

  return (
    <div>
      {filteredTasks.map((task, index) => (
        <TaskCard key={task._id ?? index} task={task} index={index} />
      ))}
    </div>
  );
};

export default TaskList;
