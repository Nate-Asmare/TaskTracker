import { useState} from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import ShowTasks from './components/ShowTasks'

function App() {
  const [displayShowTask, setDisplayShowTask] = useState(false)
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
    ])
  const addNewTask = (newTask) =>{
    // console.log("I'm here")
    setTask([...tasks, newTask])
  }
  const add = () => {
    setDisplayShowTask(!displayShowTask)
    // console.log(displayShowTask, "haha")
  }
  const close = (id) => {
    // console.log('happy new year!!', id)
    setTask(tasks.filter(task => task.id !== id))
  }
  const flip = ({id}) => {
    setTask(
      tasks.map((task) =>           
        task.id === id ? { ...task, reminder:   //watch this part carefully
        !task.reminder } : task
      )
     )
  }
  // console.log(tasks)
  return (
    <div className="container">
        <Header displayShowTask={displayShowTask} onAdd={add}/>
        {displayShowTask && <AddTask addNewTask={addNewTask}/>}
        <ShowTasks tasks={tasks} close={close} taskLength={tasks.length} flip={flip}/>
    </div>
  );
}

export default App;
