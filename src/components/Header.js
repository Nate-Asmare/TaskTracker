import Button from './Button'

const Header = ({displayShowTask, onAdd}) => {
    // l
    return (
        <div className="header">
            <h1>Task Tracker</h1>
            <Button  
                onAdd={onAdd} 
                displayShowTask={displayShowTask}/>
        </div>
    )
}

export default Header
