import { Canvas } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import CanvasElements from './components/homePage/CanvasElements';
import Main from './components/Main';
import Sidebar from './components/sidebar/Sidebar';

function App(): JSX.Element {
  const [pageIsLoading, setPageIsLoading] = useState(true);
  useEffect(() => {
    window.onload = () => {
      setPageIsLoading(false);
    };
  });
  return (
    <>
      {pageIsLoading ? (
        <div>loading</div>
      ) : (
        <>
          <Header />
          <Sidebar />
          <Main />
        </>
      )}
    </>
  );
}

export default App;
