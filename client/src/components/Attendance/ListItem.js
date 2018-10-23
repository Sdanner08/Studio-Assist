import React from "react";

export const ListItem = props => (
  <tr>
    <td>{props.students.firstName}</td>
    <td>{props.students.lastName}</td>
    <td className="text-center"><input onChange={props.onChange} className="form-check-input" type="checkbox" value={props.students._id} id="defaultCheck1" /></td>
  </tr>
);

export default ListItem;