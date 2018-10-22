import React from "react";
import './listItem.css'

export const ListItem = props => {
  return (
    <div className="card studentCard">
      <div className="studentImage"><img className="card-img-top" src={props.Student.picture} alt="student" /></div>
      <div className="card-body">
        <h4 className="card-title">{`${props.Student.firstName} ${props.Student.lastName}`}</h4>
        <h5 className="card-title">{`Age: ${props.Student.age}`}</h5>
        <a className="btn btn-primary" href={`/students/${props.Student._id}`}>View</a>
      </div>
    </div>
  )
};

export default ListItem;