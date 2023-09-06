import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Main from './components/Main';
import Sidebar from './components/sidebar/Sidebar';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Sidebar />
      <Main />
    </>
  );
}

export default App;
