import React from "react";

const AddInstructorModal = props => {
    return (
        <div className="modal fade show" role="dialog" style={{ display: "block" }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add New Instructor</h5>
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
                            <input className="form-control" type="text" value={props.username}
                                onChange={props.onChange}
                                name="username"
                                placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" value={props.password}
                                onChange={props.onChange}
                                name="password"
                                placeholder="Password (required)" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" value={props.picture}
                                onChange={props.onChange}
                                name="picture"
                                placeholder="Picture (required)" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={function (event) { props.onSave(event); props.onClose() }}>Save Instructor</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default AddInstructorModal;