import React from 'react';
import ListItem from './ListItem'
import './Attendance.css'

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!

var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
today = mm + '/' + dd + '/' + yyyy;
let listItem = ""



const Attendance = (props) => {
    if (props.students.length > 0) {
        listItem = props.students.map(Students => {
            return <ListItem onChange={props.onChange} students={Students} key={Students._id}></ListItem>
        })
    }
    return (
        <div className="card mx-auto attendanceTable mt-4 mb-4">
            <div class="row p-3">
                <div class="col-md-12">
                    <h1 className="display-4 text-center">Attendance</h1>
                    <h5 className="mt-4 text-center">Today's Date: {today}</h5>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col" className="text-center">Absent</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listItem}
                        </tbody>
                    </table>
                    {(listItem)? <button className="btn btn-sm btn-success">Submit Attendance</button>: ""}
                    
                </div>
            </div>
        </div>

    )


}


export default Attendance;
