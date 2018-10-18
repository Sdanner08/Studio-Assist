// import React...
import React from 'react';


// ... and fullcalendar-reactwrapper.
import FullCalendar from 'fullcalendar-reactwrapper';
import './calendar.css';
//import AddTaskModal from './AddTaskModal';

class Calendar extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {
	events:[
				{
					title: 'Dance Class',
					start: '2018-10-05'
				},
				{
					title: 'Dance Trip',
					start: '2018-10-07',
					end: '2018-10-10'
				},
				{
					title: 'Jazz Class',
					start: '2018-10-18T16:00:00'
				},
				{
					title: 'PTA Meeting',
					start: '2018-10-30T16:00:00'
				}
			],		
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
	    events = {this.state.events}	
	/>    
      </div>
    );
  }
}
export default Calendar;