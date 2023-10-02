import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Main from './components/Main';
import Sidebar from './components/sidebar/Sidebar';

function App(): JSX.Element {
  const [pageIsLoading, setPageIsLoading] = useState(true);
  useEffect(() => {
    window.onload = () => {
      setPageIsLoading(false);
    };
  }, []);
  return (
    <>
      {pageIsLoading ? (
        <div>LOADING</div>
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
