import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';

import Sidebar from '../components/sidebar';
import Box from '../ui/box'; 

// const Layout = (props) => (
//   <div className="container-fluid">
//     <div className="container">
//       <div>
//         <label>Account Name:</label>&nbsp;<span>Admin Account</span>
//       </div>
//     </div><hr/>
//     <div
//       className="container"
//       style={{
//         'marginTop': '50px',
//         'marginBottom': '100px'
//       }}
//     >
//       { props.children }
//     </div>
//   </div>
// );

const Layout = (props) => (
  <Box 
    className="container-fluid"
    flexDirection="row"
  >
    <Sidebar />
    <Box
      className="plcclr-ui-content"
      style={{ 'paddingLeft': '250px', width: '100%' }}
    >
      <Box className="container">
        <Box>
          <label>Account Name:</label>&nbsp;<span>Admin Account</span>
        </Box>
      </Box><hr/>
      <Box
        className="container"
        style={{
          'marginTop': '50px',
          'marginBottom': '100px'
        }}
      >
        { props.children }
      </Box>
    </Box>
  </Box>
);

export default Layout;