import React from "react";
// import "./AddClassModal.css";

const AddClassModal = props => (
    <div className="modal fade show" role="dialog" style={{ display: "block" }}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Add New Class</h5>
                    <button type="button" className="close" data-dismiss="modal" onClick={props.onClose} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <input className="form-control" type="text" value={props.nameOfClass}
                            onChange={props.onChange}
                            name="nameOfClass"
                            placeholder="Name of Class (required)" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="number" value={props.maxCapacity}
                            onChange={props.onChange}
                            name="maxCapacity"
                            placeholder="Maximum Capacity (required)" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" value={props.room}
                            onChange={props.onChange}
                            name="room"
                            placeholder="Room" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" value={props.ageGroup}
                            onChange={props.onChange}
                            name="ageGroup"
                            placeholder="Age Group" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="number" step="any" min="1" value={props.cost}
                            onChange={props.onChange}
                            name="cost"
                            placeholder="Cost (required)" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" value={props.instructor}
                            onChange={props.onChange}
                            name="cost"
                            placeholder="Instructor (required)" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" value={props.schedule}
                            onChange={props.onChange}
                            name="cost"
                            placeholder="Schedule (required)" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={props.onSave}>Save changes</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    </div>
);

export default AddClassModal;