import React from "react";

const Tasks = () => {
  const tasks = [
    { title: "Todo Task 1", status: "DONE" },
    { title: "Todo Task 2", status: "Mark as Done" },
    { title: "Todo Task 3", status: "DONE" },
    { title: "Todo Task 4", status: "Mark as Done" },
    { title: "Todo Task 5", status: "Mark as Done" },
    { title: "Todo Task 6", status: "DONE" },
    { title: "Todo Task 7", status: "DONE" },
    { title: "Todo Task 8", status: "Mark as Done" },
    { title: "Todo Task 9", status: "Mark as Done" },
    { title: "Todo Task 10", status: "Mark as Done" },
    { title: "Todo Task 11", status: "DONE" },
    { title: "Todo Task 12", status: "Mark as Done" },
  ];
  return (
    <div className="top">
      <div className="mainTasks">
        <div className="progress">
          <h2>40% Done</h2>
          <div className="lightBar">
            <div className="darkBar"></div>
          </div>
        </div>
      </div>
      <div className="mainT">
        {tasks.map((task) => (
          <div className="task" key={task.title}>
            <h3>{task.title}</h3>
            <button
              style={{
                color: "#FFFFFF",
                backgroundColor: task.status === "DONE" ? "#CCCCCC" : "#5AC8FA",
              }}
            >
              {task.status}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
