import React, { Component } from "react";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";
import CharacterCard from "./CharacterCard";
import characters from "./characters.json";
import Header from "./Header";


class Container extends Component {
  state = {
    characters,

  };


  handleResultChange = event => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value
    });
  };


  

  render() {
    return (
        <div>
        <Navbar
          title="Clicky Game"
          result={this.state.result}
          score={this.state.score || 0}
          topScore={this.state.topScore || 0}
          />
        <Header
          heading={"Clicky Game!"}
          subHeading={"Click on an image to earn points, but don't click on any more than once!"}
          />
          <Wrapper>
        {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            key={character.id}
            image={character.image}
          />
        ))}
        </Wrapper>
      </div>
    );
  }
}

export default Container;
