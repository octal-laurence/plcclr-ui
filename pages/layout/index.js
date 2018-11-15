import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';

const Layout = (props) => (
  <div className="container-fluid">
    <div className="container">
      <div>
        <label>Account Name:</label>&nbsp;<span>Admin Account</span>
      </div>
    </div><hr/>
    <div
      className="container"
      style={{
        'marginTop': '50px',
        'marginBottom': '100px'
      }}
    >
      { props.children }
    </div>
  </div>
);

export default Layout;