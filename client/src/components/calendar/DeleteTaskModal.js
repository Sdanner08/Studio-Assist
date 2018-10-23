import React from "react";
//import Calendar from '../../components/calendar/calendar.js';



const  DeleteTaskModal = props => {
    return (
        
    <div className="modal fade show" role="dialog" style={{ display: "block" }}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Delete Task</h5>
                    <button type="button" className="close" data-dismiss="modal" onClick={props.onClose} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
         

                    <div className="btn-group dropright">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Select Task
                        </button>
                        <div className="dropdown-menu">
                        <button className="dropdown-item" type="button">{props.events}</button>
                        <p> sample text</p>
                         </div>
                    </div>



                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={function (event) {props.onSave(event); props.onClose() }}>Delete Task</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    </div>
    )
};

export default DeleteTaskModal;