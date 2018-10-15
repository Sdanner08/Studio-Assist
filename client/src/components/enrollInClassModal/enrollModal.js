import React from "react";




const EnrollModal = props => {

    const classes = props.classes.map(classes => {
        return (
            <option value={classes._id} key={classes._id}>{`${classes.nameOfClass} Ages:${classes.ageGroup}`}</option>
        )
    })

    return (


        <div className="modal fade show" role="dialog" style={{ display: "block" }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Enroll in a Class</h5>
                        <button type="button" className="close" data-dismiss="modal" onClick={props.onClose} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <select className="form-control" name="selectedClass" onChange={props.onChange}>
                                <option disabled selected>Please choose an Class</option>
                                {classes}
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={function (event) { props.onSave(event); props.onClose() }}>Save Class</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default EnrollModal;