import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

import './Datepicker.styles.css';

class Datepicker extends Component {

  render() {
    return (
      <div>
        <p className="datepicker__title">{this.props.title}</p>
        <DatePicker
          selected={this.props.startDate}
          onChange={this.props.onChange}
          dateFormat="dd MMMM yyyy"
          className="datepicker"
        // minDate={subDays(new Date(), 5)}
        maxDate={new Date()}
        />
      </div>
    );
  }
}

export default Datepicker;