import React from 'react';
import './App.css';
import Header from './header';
import Table from './table';

function App() {

  return (
    <div className="row w-100">
      <div className="col-auto bg-dark">

      </div>
      <div className="col p-4">
        <Header />
        <Table />
      </div>
    </div>
  );
}

export default App;
