import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class TimeContent extends PureComponent {
  constructor(props, context) {
    super(props, context);

    // this.state = {
    //   changes: false,
    //   value: this.formatDate(props),
    // };
  }

  // componentDidMount() {
  //   if (this.closest_interval.current) {
  //     this.closest_interval.current.scrollIntoView();
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //   const { value } = prevProps;

  //   if (!isEqual(value, this.props.value)) {
  //     this.setState({ value: this.formatDate(this.props) });
  //   }
  // }

  // formatDate({ value, dateDisplayFormat, dateOptions }) {
  //   if (value && isValid(value)) {
  //     return format(value, dateDisplayFormat, dateOptions);
  //   }
  //   return '';
  // }

  handleClick = (value, unit) => {
    return () => {
      this.props.update(value, unit);
    };
  };

  render() {
    const { max, unit, value } = this.props;

    return (
      <ul className={classnames('rdrTimeContent')}>
        {Array.from(new Array(max + 1)).map((_, index) => (
          <li
            key={index}
            className={index === value ? 'active' : ''}
            onClick={this.handleClick(index, unit)}>
            {`${index < 10 ? '0' : ''}${index}`}
          </li>
        ))}
      </ul>
    );
  }
}

TimeContent.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  update: PropTypes.func,
  unit: PropTypes.oneOf(['hour', 'minute']),
};

TimeContent.defaultProps = {
  value: 0,
  disabled: false,
};

export default TimeContent;
