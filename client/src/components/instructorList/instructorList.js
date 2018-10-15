import React from 'react';
import ListItem from '../../components/instructorList/listItem'

const InstructorList = (props) => {
    const listItem = props.instructors.map(Instructors => {
        return <ListItem Instructors={Instructors} key={Instructors._id} ></ListItem>
    })

    return (
        <div>
            <table className="table table-striped mt-4">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                    </tr>

                </thead>
                <tbody>
                    {listItem}
                </tbody>
            </table>
        </div>
    )
}


export default InstructorList;