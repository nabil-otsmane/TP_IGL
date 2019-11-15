import React ,{Component} from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';

class App extends Component {
  render(){
    return (
      <div className ="App" >
          <Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
      </div>
    );
  }
}

export default App;
