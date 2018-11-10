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

  constructor(props){
    super(props)
    this.state = {
      score: 0,
      topScore: 0,
      pokemon: []
    }

    this.imageClicked = this.imageClicked.bind(this)
  }

  

  componentDidMount(){

    this.setState({pokemon: pokemon});

  }

  //this doesnt work yet
  imageClicked(e){
    this.shuffleArray(this.state.pokemon);

    let score = 0;

    if(!e.target.value){
      score += 1;
      e.target.value = false;

      this.setState({score: score},function(){
        if(this.state.score > this.state.topScore){
          this.setState({topScore: this.state.score})
        }
      });
    }
    else {
      this.setState({ score: 0})
    }

  }

  //scoring doesn't work yet
  shuffleArray(array) {

      let j, x, i;
      
      for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
      }
      
      this.setState({pokemon: array})
    
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
              <Col md="3" sm="4" xs="6" key = {pokemon._id}>
                <img alt = {pokemon.name} src = {pokemon.image} style = {picStyle} value = {pokemon.clicked} onClick={this.imageClicked}/>
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
