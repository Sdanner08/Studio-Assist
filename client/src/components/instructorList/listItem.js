import React from "react";
import './listItem.css'

export const ListItem = props => (
  <div className="card mb-2 instructorCard">
    <div className="instructorImage"><img className="card-img-top" src={`${props.Instructors.picture}`} alt="" /></div>
    <div className="card-body">
      <h4 className="card-title">{`${props.Instructors.firstName} ${props.Instructors.lastName}`}</h4>
      <h5 className="card-title">{`Classes Teaching: ${props.Instructors.classes.length}`}</h5>
      <a className="btn btn-sm btn-primary" href={`/instructors/${props.Instructors._id}`}>View</a>
    </div>
  </div>
);

export default ListItem;