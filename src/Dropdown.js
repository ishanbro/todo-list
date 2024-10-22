// import React , {useState} from 'react';
// function Dropdown()
// {
//     const [selectedValue, setSelectedValue] = useState('Display');
//     const handleChange = (event) => {
//         setSelectedValue(event.target.value);
//     };
//     return(
//         <select value={selectedValue} onChange = {handleChange}>
//             <option value="option 1">Grouping</option>
//             <option value="option 2">Ordering</option>
//         </select>
//     )
// }
// export default Dropdown;
import React from 'react';
import './Dropdown.css';
const Dropdown = ({ grouping, ordering, onGroupingChange, onOrderingChange }) => {
  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <button className="dropdown-btn"><img className='displaybtn' src='icons_FEtask\Display.svg'></img>Display <img className='arrowdown' src='icons_FEtask\down.svg'></img></button>
        <div className="dropdown-content">
          <div className="dropdown-option">
            <label>Grouping</label>
            <select value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
              <option value="Status">Status</option>
              <option value="User">User</option>
              <option value="Priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-option">
            <label>Ordering</label>
            <select value={ordering} onChange={(e) => onOrderingChange(e.target.value)}>
              <option value="Priority">Priority</option>
              <option value="Title">Title</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

