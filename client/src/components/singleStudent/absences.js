import React from 'react'


const Absences = (props) => {
    let absentClasses = []
    props.classes.forEach(oneClass => {
        oneClass.attendance.forEach(oneAttendance => {
            oneAttendance.absentStudents.forEach(student => {
                if (student === props.id) {
                    absentClasses.push({
                        className: oneClass.nameOfClass,
                        date: oneAttendance.date,
                        id: oneAttendance._id
                    })
                }
            })

        })



    });
    let abs;
    if (absentClasses.length) {
        abs = absentClasses.map(eachClass => <li key={eachClass.id} className="list-group-item" >{eachClass.className} on {eachClass.date}</li>)
    }
    else {
        abs = <li className="list-group-item">No recorded Absences</li>
    }


    return (
        <ul className="list-group">
            {abs}
        </ul>
    )
}

export default Absences; 