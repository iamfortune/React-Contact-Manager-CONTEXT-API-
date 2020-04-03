import React from 'react'
import PropTypes from 'prop-types';

const  TextInputGroup = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange
}) => {
   return (
     <div className="form-group">
       <label htmlFor="name">Name</label>
       <input
         type="text"
         name="name"
         className="form-control form-control-lg"
         placeholder="Enter Name..."
         value={name}
         onChange={this.onChange}
       />
     </div>
   );
};

export default TextInputGroup;
