import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const Layout = ( props ) => (
  <Aux>
    <div>ToolBar, SideBar, BackDrop</div>
    <main className={classes.content}>
      {props.children}
    </main>
  </Aux>
);

export default Layout;
