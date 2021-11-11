import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    person: {
      fullName: "Elon musk",
      bio: "Elon Reeve Musk ,born June 28, 1971 is an entrepreneur and business magnate. He is the founder, CEO, and Chief Engineer at SpaceX; early-stage investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI. A centibillionaire, Musk is the richest person in the world as of November 2021 with a net worth of around US$280 billion",
      imgPub: "/photo.jpg",
      profession:
        "Founder, CEO and Chief Engineer of Space X CEO and product architect of Tesla, Inc.Founder of The Boring Company and X.com (now part of PayPal) Co-founder of Neuralink, OpenAI, and Zip2 ",
    },
    hidden: false,
    counter: 0,
  };
  handleClick = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.hidden ? (
          <header className="App-header">
            <h2>Full Name : {this.state.person.fullName}</h2>
            <h3> Biography : {this.state.person.bio}</h3>
            <img src={this.state.person.imgPub} alt="Alicia" width="400px" />
            <h4> Profession : {this.state.person.profession}</h4>
          </header>
        ) : (
          <h1> Click the Button to Go </h1>
        )}
        <button onClick={this.handleClick}>click Me !</button>
        <h5> {this.state.counter}</h5>
      </div>
    );
  }
}

export default App;
