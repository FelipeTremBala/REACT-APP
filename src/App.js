import React, { useState } from "react"
  import Tasks from "./components/Tasks";
  import "./App.css";
  import Header from "./components/Header";
import AddTask from "./components/AddTask";



  const App = () => {
    // let message = 'Hello world!'
    const [tasks, setTasks]  = useState([
      {
        id:"1",
        title: "Lavar a louça",
        completed: false,
      },
      {
        id: "2",
        title: "Tirar o lixo",
        completed: false,
      },
      {
        id: "3",
        title: "Arrumar o quarto",
        completed: false,
      },
      {
        id: "4",
        title: "Limpar a casa",
        completed: false,
      },
    ]);  

    const handleTaskClick = (taskId) => {
      const newTasks = tasks.map (task => {
        if(task.id === taskId) return {...task, completed: !task.completed}
        
        return task;
      });

      setTasks(newTasks)

    };

    const handleTaskAddition = (taskTitle) => {
      const newTasks = [
        ...tasks, 
        {
          title: taskTitle,
          id: Math.random(10),
          completed:false,


        },
      ];

      setTasks(newTasks);
    };
  
    const handleTaskDeletion = (taskId) => {
      const newTasks = tasks.filter((task) => task.id !== taskId);

      setTasks(newTasks);
    }
 
    return(
 
        <div className="container">
          <Header />
              <>
            <AddTask handleTaskAddition={handleTaskAddition}/>
            <Tasks tasks={tasks} 
              handleTaskClick={handleTaskClick}
              handleTaskDeletion={handleTaskDeletion}
            />
              </>
          )}/>
        </div>

    ); 
  };
  
  export default App;

