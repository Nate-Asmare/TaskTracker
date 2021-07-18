import Task from './Task'

const ShowTasks = ({tasks, close, taskLength, flip}) => {
    // console.log({tasks})
    return (
        <>
        {taskLength === 0 && <p className="noTask">No tasks added</p>}
        {
            tasks.map((task) =>
                (
                    <Task key={task.id} task={task} close={close} flip={flip}/>
                )
            )
        }
        </>
    )
}

export default ShowTasks
