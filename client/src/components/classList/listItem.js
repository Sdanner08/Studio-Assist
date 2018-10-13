import React from "react";

export const ListItem = props => (
  <tr>
    <td>{props.Classes.nameOfClass}</td>
    <td>{props.Classes.maxCapacity}</td>
    <td>{props.Classes.room}</td>
    <td>{props.Classes.ageGroup}</td>
    <td><a className="btn btn-sm btn-primary" href={`/classes/${props.Classes._id}`}>View</a></td>

  </tr>
);

export default ListItem;