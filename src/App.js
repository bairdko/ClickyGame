import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';

import pokemon from './pokemon.json';

const picStyle = {
  backgroundColor: "#f8f9fa",
  border: "solid 2px #dc3545",
  borderRadius: ".3rem",
  margin: "5px 0"
}


class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    pokemon: []
  }

  componentDidMount(){

    this.setState({pokemon: pokemon})

  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Container>
          <Row><br/></Row>
          <Jumbotron />
          <Row><br/></Row>
          <Row>
            {this.state.pokemon.map( pokemon => (
              <Col md="3" sm="4" xs="6">
                <img alt = {pokemon.name} src = {pokemon.image} style = {picStyle} value = {pokemon.clicked}/>
              </Col>
            ))}
          </Row>
          <Row><br/></Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
