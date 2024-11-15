import React from "react";
import './App.css'
import { Task } from './types';
import AddTask from './AddTask';
import TaskList from "./TaskList";
import TaskListHeader from "./TaskListHeader";
import TaskListItem from "./TaskListItem";

function App() {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  console.log('App rendered');

  const onAddTask = (taskName: string) => {
    setTasks([
      ...tasks,
      {
        id: new Date().getTime(), // Not a great way to generate IDs
        title: taskName,
        isCompleted: false,
      },
    ]);
  };


  return (
    <>
      <h1>Tasks</h1>
      <AddTask onAddTask={onAddTask} />
      <TaskList header={<TaskListHeader count={tasks.length} />}>
        {tasks.map((task) => (
          <TaskListItem key={task.id}>{task.title}</TaskListItem>
        ))}
      </TaskList>
    </>
  )
}

export default App
