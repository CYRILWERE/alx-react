import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CourseListRow.css';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [checked, setChecked] = useState(false);

  const rowStyle = { backgroundColor: checked ? '#e6e4e4' : '#f5f5f5ab' };

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr style={rowStyle}>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr style={rowStyle}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={rowStyle}>
        <td>
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={checked}
          />
          {textFirstCell}
        </td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;

