import React from "react";

const AddClassModal = props => {

    const instructors = props.instructors.map(ins => {
        return (
            <option value={ins._id} key={ins._id}>{ins.firstName + " " + ins.lastName}</option>
        )
    })

    return (

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
                            <select className="form-control" name="ageGroup" onChange={props.onChange}>
                                <option disabled selected>Please choose an age group</option>
                                <option value="3-4">3-4</option>
                                <option value="5-7">5-7</option>
                                <option value="8-12">8-12</option>
                                <option value="13-16">13-16</option>
                                <option value="17-18">17-18</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="number" step="any" min="1" value={props.cost}
                                onChange={props.onChange}
                                name="cost"
                                placeholder="Cost (required)" />
                        </div>
                        <div className="form-group">
                            <select className="form-control" name="instructor" onChange={props.onChange}>
                                <option disabled selected>Please choose an Instructor</option>
                                {instructors}
                            </select>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" onChange={props.onChange} name="monday" type="checkbox" id="monday" value="monday" />
                            <label className="form-check-label" htmlFor="monday">Mon</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" onChange={props.onChange} name="tuesday" type="checkbox" id="tuesday" value="tuesday" />
                            <label className="form-check-label" htmlFor="tuesday">Tue</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" onChange={props.onChange} name="wednesday" type="checkbox" id="wednesday" value="wednesday" />
                            <label className="form-check-label" htmlFor="wednesday">Wed</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" onChange={props.onChange} name="thursday" type="checkbox" id="thursday" value="thursday" />
                            <label className="form-check-label" htmlFor="thursday">Thur</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" onChange={props.onChange} name="friday" type="checkbox" id="friday" value="friday" />
                            <label className="form-check-label" htmlFor="friday">Fri</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" onChange={props.onChange} name="saturday" type="checkbox" id="saturday" value="saturday" />
                            <label className="form-check-label" htmlFor="saturday">Sat</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" onChange={props.onChange} name="sunday" type="checkbox" id="sunday" value="sunday" />
                            <label className="form-check-label" htmlFor="sunday">Sun</label>
                        </div>

                        <div className="form-group pt-3">
                            <input type="time" className="form-control" onChange={props.onChange} name="time"></input>
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

export default AddClassModal;