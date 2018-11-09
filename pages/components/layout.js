import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';

const Layout = (props) => (
  <div>
    <Head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Police Clearance</title>
 
      <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
      <link href="/assets/css/simple-sidebar.css" rel="stylesheet" />
      <script src="/assets/js/jquery.js"></script>
      <script src="/assets/js/bootstrap.min.js"></script>
    </Head>
    <div id="wrapper" className="toggled">
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <a href="/">
              PLCCLR
            </a>
          </li>
          { /*PAGES NAVIGATOR*/
            [{
              label: `Police Clearance Certification`,
              href: `/certification-form`
            }, {
              label: `Police Clearance Entries`,
              href: `/certification-entries`
            }].map(({label, href}, i) => (
              <li key={i}>
                <a href={`${href}`}>{ label }</a>
              </li>
            ))
          }
        </ul>
      </div>
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <div>
            <label>Account Name:</label>&nbsp;<span>Admin Account</span>
          </div>
          <div className="pull-right">
            <a href="/">log-out</a>
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
    </div>
  </div>
);

export default Layout;