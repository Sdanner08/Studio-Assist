import React from 'react'


const ClassesErrolled = (props) => {
    console.log(props.classes)
    const allClasses = props.classes.map(Class => {
        return (
            <li key={Class._id} className="list-group-item">{Class.nameOfClass} on {Class.schedule.map(day => `${day} `)} at {Class.time} in room {Class.room}</li>
        )
    })
    return (
        <ul className="listGroup">
            {allClasses}
        </ul>
    )
}

export default ClassesErrolled; 