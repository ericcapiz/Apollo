import React from "react";

const Tasks = () => {
  const tasks = [
    { title: "Todo Task 1", done: "DONE" },
    { title: "Todo Task 2", done: "Mark as Done" },
    { title: "Todo Task 3", done: "DONE" },
    { title: "Todo Task 4", done: "Mark as Done" },
    { title: "Todo Task 5", done: "Mark as Done" },
    { title: "Todo Task 6", done: "DONE" },
    { title: "Todo Task 7", done: "DONE" },
    { title: "Todo Task 8", done: "Mark as Done" },
    { title: "Todo Task 9", done: "Mark as Done" },
    { title: "Todo Task 10", done: "Mark as Done" },
    { title: "Todo Task 11", done: "DONE" },
    { title: "Todo Task 12", done: "Mark as Done" },
  ];
  return (
    <div className="">
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
                backgroundColor: task.done === "DONE" ? "#CCCCCC" : "#5AC8FA",
              }}
            >
              {task.done}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
