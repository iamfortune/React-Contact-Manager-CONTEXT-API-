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
       <label htmlFor={name}>{label}</label>
       <input
         type={type}
         name={name}
         className="form-control form-control-lg"
         placeholder={placeholder}
         value={name}
         onChange={onChange}
       />
     </div>
   );
};


TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}



export default TextInputGroup;
