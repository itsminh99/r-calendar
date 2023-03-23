import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getHours, getMinutes } from 'date-fns';
import TimeContent from './TimeContent';

class TimePicker extends PureComponent {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { date } = this.props;

    return (
      <div className={classnames('rdrTimePicker')}>
        <TimeContent value={getHours(date)} max={23} update={this.props.onChangeTime} unit="hour" />
        <TimeContent
          value={getMinutes(date)}
          max={59}
          update={this.props.onChangeTime}
          unit="minute"
        />
      </div>
    );
  }
}

TimePicker.propTypes = {
  date: PropTypes.object,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  className: PropTypes.string,
  onChangeTime: PropTypes.func.isRequired,
};

TimePicker.defaultProps = {
  readOnly: true,
  disabled: false,
  dateDisplayFormat: 'MMM d, yyyy h:mma',
};

export default TimePicker;
