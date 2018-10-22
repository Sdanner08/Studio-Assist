// import React...
import React from 'react';
//import API from "../../utils/API";


// ... and fullcalendar-reactwrapper.
import FullCalendar from 'fullcalendar-reactwrapper';
import './calendar.css';

class Calendar extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {
	events:[],		
	}
  }
	

  render() {
    return (
      <div id="calendar-component">
        <FullCalendar
             id = "your-custom-ID"
	     header = {{
			left: 'prev,next today myCustomButton',
			center: 'title',
			right: 'month,basicWeek,basicDay'
		}}
	     defaultDate={'2018-10-15'}
	    navLinks= {true} // can click day/week names to navigate views
	    editable= {true}
	    eventLimit= {true} // allow "more" link when too many events
	    events = {this.props.events}	
	/>    
      </div>
    );
  }
}
export default Calendar;