import React from 'react';
import ListItem from '../../components/instructorList/listItem'
import Wrapper from '../../components/Wrapper/Wrapper'


const InstructorList = (props) => {
    const listItem = props.instructors.map(Instructors => {
        return <ListItem Instructors={Instructors} key={Instructors._id} classes={Instructors.classes}></ListItem>
    })

    return (
        <Wrapper>
            {listItem}
        </Wrapper>
    )
}


export default InstructorList;