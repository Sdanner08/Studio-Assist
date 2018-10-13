import React, { Component } from 'react';
import ListItem from '../../components/classList/listItem'
import getClasses from '../../utils/API'
import "./classList.css";
import Classes from '../../pages/Classes/Classes';


const ClassList = (props) => {
    const listItem = props.classes.map(Classes => {
        return <ListItem Classes={Classes} key={Classes._id} ></ListItem>
    })

    return (
        <div>
            <table className="table table-striped mt-4">
                <thead>
                    <tr>
                        <th scope="col">Class</th>
                        <th scope="col">Max Capacity</th>
                        <th scope="col">Room</th>
                        <th scope="col">Age Group</th>
                        <th scope="col"></th>
                    </tr>

                </thead>
                <tbody>
                    {listItem}
                </tbody>
            </table>
        </div>
    )


}


export default ClassList;