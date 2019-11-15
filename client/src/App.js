import React from 'react';
import './App.css';
import Header from './header';
import BootstrapTable from 'react-bootstrap-table-next';

function App() {

  const columns = [{
    dataField: 'id',
    text: 'Product ID',
    sort: true
  }, {
    dataField: 'name',
    text: 'Product Name'
  }, {
    dataField: 'price',
    text: 'Product Price'
  }];

  const products = [
    {
      id:0,
      name:"hello",
      price:"hello2"
    },
    {
      id:1,
      name:"hello",
      price:"hello2"
    },
    {
      id:2,
      name:"hello",
      price:"hello2"
    },
    {
      id:3,
      name:"hello",
      price:"hello2"
    },
    {
      id:4,
      name:"hello",
      price:"hello2"
    }
  ];

  const defaultSorted = [{
    dataField: 'id',
    order: 'desc',
  }];

  return (
    <div className="row w-100">
      <div className="col-auto bg-dark">
      </div>
      <div className="col p-4">
        <Header />
        
      </div>
    </div>
  );
}

export default App;
