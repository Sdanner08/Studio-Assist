import React from "react";
import './listItem.css'

export const ListItem = props => {
  return (
    <div className="card studentCard">
      {/* <img className="card-img-top" src="..." /> */}
      <h5 className="card-body">{`${props.Student.firstName} ${props.Student.lastName}`}</h5>
      <p className="card-body">{`Age: ${props.Student.age}`}</p>
      <a className="btn btn-sm btn-primary" href={`/students/${props.Student._id}`}>View</a>
    </div>
  )
};

export default ListItem;