const Task = ({task, close, flip}) => {
    // const close = () => {
    //     console.log("close click detected")
    // }
    const doubleClick = () => {
        
    }
    return (
        <div className={`task ${task.reminder? 'no' : 'left'}`} 
            onDoubleClick={() => flip(task)}>
            <div className="subTask">
                <h3>{task.text}</h3> 
                <p>{task.day}</p>
            </div> 
            <strong class="close" onClick={() => close(task.id)}>X</strong>
        </div>
    )
}

export default Task
