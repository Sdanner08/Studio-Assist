import React from "react";

export const ListItem = props => (
  <tr>
    <td>{props.Instructors.firstName}</td>
    <td>{props.Instructors.lastName}</td>
    <td>{props.Instructors.classes.length}</td>
    <td><a className="btn btn-sm btn-primary" href={`/instructors/${props.Instructors._id}`}>View</a></td>
  </tr>
);

export default ListItem;