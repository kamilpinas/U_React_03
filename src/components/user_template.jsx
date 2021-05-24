import React from 'react';
import PropTypes from 'prop-types';

const UserTemplate = (props) => {
  return (
    <div>
      Templeate
    </div>
  );
};

UserTemplate.PropTypes = {
  name: PropTypes.string,
  lastname: PropTypes.string,
  age: PropTypes.number,
  hobbies: PropTypes.array
}

export default UserTemplate;