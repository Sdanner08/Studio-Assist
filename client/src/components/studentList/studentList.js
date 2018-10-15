import React from 'react';
import ListItem from '../../components/studentList/listItem'

const StudentList = (props) => {
    const studentItem = props.students.map(student => {
        return <ListItem Student={student} key={student._id} />
    })

    return (

        < div >
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Age</th>
                        <th scope="col"></th>

                    </tr>
                </thead>
                <tbody>
                    {studentItem}
                </tbody>
            </table>
        </div >
    )
}

export default StudentList;