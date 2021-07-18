import { useState } from 'react'

const AddTask = ({addNewTask}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(text == ''){
            alert('plase add a task')
            return
        }
        const id = Math.floor(Math.random() * 1000) + 1
        const newTask = {id, text, day, reminder}
        addNewTask(newTask)
        
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form onSubmit={onSubmit}>  
            <label>Task</label>
            <input type="text" placeholder="Add a task here"
                value={text}
                onChange={(e) => setText(e.target.value)}></input>
            <label placeholder="Day & time">Day & time</label>
            <input type="text" placeholder="Add Day & Time"
                value={day}
                onChange={(e) => setDay(e.target.value)}></input>
            <label for="set reminder">Set reminder</label>
            <input type="checkbox"
                checked={reminder}
                onChange={(e) => setReminder(e.target.value)}></input>
            <input type="submit" value="Save Task"></input>
        </form>
    )
}

export default AddTask
