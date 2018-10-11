import React from "react";

export const ListItem = props => (
  <tr>
    <td scope="row">{props.Classes.nameOfClass}</td>
    <td scope="row">{props.Classes.maxCapacity}</td>
    <td scope="row">{props.Classes.room}</td>
    <td scope="row">{props.Classes.ageGroup}</td>
    <td scope="row"><a className="btn btn-sm btn-default" href={`/classes/${props.Classes._id}`}>View</a></td>

  </tr>
);

export default ListItem;