import React from 'react';
import ListItem from '../../components/studentList/listItem'
import Wrapper from '../../components/Wrapper/Wrapper'

const StudentList = (props) => {
    const studentItem = props.students.map(student => {
        return <ListItem Student={student} key={student._id} />
    })

    return (
        <Wrapper>
            {studentItem}
        </Wrapper>
    )
}

export default StudentList;