import React from 'react';
import { Jumbotron } from 'reactstrap';

const jumboStyle = {
  backgroundColor: "#f8f9fa",
  border: "solid 2px #dc3545"
}

const Jumbo = () => (
  <div>
    <Jumbotron className = "text-center" style = {jumboStyle}>
      <h1 className = "text-danger">Catch 'em all!</h1>
      <p className = "lead">Click on a pokemon to catch it! Watch out, you can only catch one of each type or the game is over!</p>
    </Jumbotron>
  </div>
);

export default Jumbo;