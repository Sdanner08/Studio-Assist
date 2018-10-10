import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./calender.css";

class Modal extends Component {
    render() {
        if(!this.props.show) {
            return null;
          }
        return (
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Add a Task</h4>
        </div>
        <div class="modal-body">
        <input id="taskAdd" type="text" class="form-control" name="taskAdd" placeholder="Add Task Here" />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="Modal">submit</button>
        </div>
      </div>
      
    </div>
  </div>

        )
    }
}
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
  };
export default Modal;