import React from 'react';
import classes from './Sidebar.module.css';

const sidebar = (props) => (
  <div className={classes.Sidebar}>
    <ul>List Projects</ul>
    <div>
      <i className="material-icons">add</i>
      <p>Add project</p>
    </div>
    <input type="text" />
  </div>
);

export default sidebar;
