import React from "react";
// import "./AddStudentModal.css";

const AddStudentModal = props => (
    <div className="modal fade show" role="dialog" style={{ display: "block" }}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Add New Student</h5>
                    <button type="button" className="close" data-dismiss="modal" onClick={props.onClose} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <input className="form-control" type="text" value={props.firstName}
                            onChange={props.onChange}
                            name="firstName"
                            placeholder="First Name (required)" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" value={props.lastName}
                            onChange={props.onChange}
                            name="lastName"
                            placeholder="Last Name (required)" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" value={props.picture}
                            onChange={props.onChange}
                            name="picture"
                            placeholder="Picture" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="date" value={props.birthday}
                            onChange={props.onChange}
                            name="birthday"
                            placeholder="Birthday" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" value={props.parentFirstName}
                            onChange={props.onChange}
                            name="parentFirstName"
                            placeholder="Parent First Name" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" value={props.parentLastName}
                            onChange={props.onChange}
                            name="parentLastName"
                            placeholder="Parent Last Name" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" value={props.phone}
                            onChange={props.onChange}
                            name="phone"
                            placeholder="Parent Phone" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={function (event) { props.onSave(event); props.onClose() }}>Save Student</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    </div>
)

export default AddStudentModal;
