import React from "react";
import './listItem.css'

export const ListItem = props => (
  <div className="card instructorCard">
    {/* <img className="card-img-top" src="..." /> */}
    <h5 className="card-body">{`${props.Instructors.firstName} ${props.Instructors.lastName}`}</h5>
    <p className="card-body">{`# of Classes: ${props.Instructors.classes.length}`}</p>
    <a className="btn btn-sm btn-primary" href={`/instructors/${props.Instructors._id}`}>View</a>
  </div>
);

export default ListItem;