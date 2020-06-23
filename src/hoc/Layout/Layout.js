import React from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Toolbar/Toolbar';

const layout = (props) => {
  return (
    <Aux>
      {/* <div>Toolbar, Backdrop</div> */}
      <Toolbar />
      <main>{props.children}</main>
    </Aux>
  );
};

export default layout;
