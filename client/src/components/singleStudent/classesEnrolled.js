import React from 'react'


const ClassesErrolled = (props) => {
    let allClasses;

    if (props.classes.length) {
        allClasses = props.classes.map(Class => {
            return (
                <li key={Class._id} className="list-group-item pl-4">{Class.nameOfClass} on {Class.schedule.map(day => `${day} `)} at {Class.time} in room {Class.room}</li>
            )
        })
    } else {
        return <li className="list-group-item">No Classes to show</li>
    }
    return (
        <ul className="list-group ">
            {allClasses}
        </ul>
    )
}

export default ClassesErrolled; 