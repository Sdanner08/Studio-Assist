import React from "react";

export const ListItem = props => {
  return (
    <tr>
      <td>{props.Student.firstName}</td>
      <td>{props.Student.lastName}</td>
      <td>{props.Student.age}</td>
      <td><a className="btn btn-sm btn-primary" href={`/students/${props.Student._id}`}>View</a></td>
    </tr>
  )
};

export default ListItem;