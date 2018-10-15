import React from 'react'


const ClassesErrolled = (props) => {

    const allClasses = props.classes.map(Class => {
        return (
            <li key={Class._id} className="list-group-item">{Class.nameOfClass}</li>
        )
    })
    return (
        <ul className="listGroup">
            {allClasses}
        </ul>
    )
}

export default ClassesErrolled; 