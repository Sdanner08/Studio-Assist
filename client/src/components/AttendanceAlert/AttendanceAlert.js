import React from 'react';

const AttendanceAlert = (props) => {
    return (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Today's attendance has been successfully submitted!</strong>
            <button type="button" className="close" data-dismiss="alert" onClick={props.onClose} aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default AttendanceAlert;

