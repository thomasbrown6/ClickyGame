import React, { Component } from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import CharacterCard from "./CharacterCard";
import characters from "./characters.json";
import Header from "./Header";



class AppContainer extends Component {
  state = {
    characters,
    score: 0,
    topScore: 0,
    message: "Click an image to begin!",
    clicked: []
  };

  // handleCorrectGuess increments this.state.score by 1
  handleCorrectGuess = (id) => {
    if (this.state.score === this.state.topScore) {
      this.setState({ 
      score: this.state.score + 1,
      topScore: this.state.score + 1,
      message: "You Guessed Correctly!",
      clicked: [...this.state.clicked, id]
     });
    }
    else {
      this.setState({
        score: this.state.score + 1,
        message: "You Guessed Correctly!",
        clicked: [...this.state.clicked, id]
      });
    }
    console.log(this.state.clicked);
    this.handleShuffle();
  };

  // handleWrongGuess sets the score back to 0 and set topScore to the highest score
  handleWrongGuess = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({ 
      topScore: this.state.score,
       score: 0,
       message: "You Guessed Incorrectly!",
       clicked: []
      });
    } 
    else {
      this.setState({ 
        score: 0,
        message: "You Guessed Incorrectly!",
        clicked: []
      });
    }
    console.log(this.state.clicked);
    this.handleShuffle();
  };

  // Default case
  defaultMessage = () => {
    this.setState({
      message: "Click an Image to Begin!"
    });
  };


  // Function to check for a correct or incorrect guess
  handleClick = (value, id) => {
    switch (value) {
      case 1:
        return this.handleCorrectGuess(id);
      case 0: 
        return this.handleWrongGuess(id);
      default: this.defaultMessage();
    }
  };

  // Function to shuffle characters
  shuffleTheCharacters = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  handleShuffle = () => {
    let shuffledCharacters = this.shuffleTheCharacters(characters);
    this.setState({ characters: shuffledCharacters });
  };
  

  render() {
    return (
      <div>
        <Navbar
          title="Clicky Game"
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
          />
        <Header
          heading={"Clicky Game!"}
          subHeading={"Click on an image to earn points, but don't click on any more than once!"}
          />
        <Container>
          {this.state.characters.map(character => (
            <CharacterCard
              id={character.id}
              key={character.id}
              image={character.image}
              value={character.value}
              handleClick={this.handleClick}
              />
          ))}
        </Container>
      </div>
    );
  }
}

export default AppContainer;
