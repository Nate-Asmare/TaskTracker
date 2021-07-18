const Button = ({onAdd, displayShowTask}) => {
    return (
        <button className="btn"
        onClick={onAdd}>{displayShowTask? "Close": "Add"}</button>
    )
}

export default Button

