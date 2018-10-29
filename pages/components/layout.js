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
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
    </Head>
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