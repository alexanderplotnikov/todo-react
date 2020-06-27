import React from 'react';
import classes from './Sidebar.module.css';
import Button from '../UI/Button/Button';

const sidebar = (props) => (
  <div className={classes.Sidebar}>
    <ul>
      <li>School</li>
      <li>Work</li>
    </ul>
    {/* <Button btnType="add">Add project</Button>
    <input type="text" /> */}
  </div>
);

export default sidebar;
