import React, { Component } from "react";
import API from "../../util/API";

class Discover extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0,
  };

  componentDidMount() {
    this.getNewDog();
  }

  getNewDog = () => {
    API.getRandomDog().then((resultingPicture) =>
      this.setState({ image: resultingPicture.data.message })
    );
  };

  handleDislike = () => {
    this.setState({ match: false });
    this.getNewDog();
  };

  handleLike = () => {
    this.setState({ match: false });
    const myNumber = Math.floor(Math.random() * 5 + 1);
    if (myNumber === 1) {
      this.setState({ match: true, count: this.state.matchCount + 1 });
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <img
                src={this.state.image}
                alt="Doggie"
                style={{ height: 400 }}
              />
            </div>
            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-3 d-flex justify-content-start">
                <button className="btn btn-danger" onClick={this.handleDislike}>
                  Dislike
                </button>
              </div>
              <div className="col-sm-3 d-flex justify-content-start">
                <button className="btn btn-success" onClick={this.handleLike}>
                  Like
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3 className="text-center">
                  {this.state.matchCount} has liked you too!
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {this.state.showAlert && (
                  <div className="alert alert-success" role="alert">
                    Awesome! That dog liked you too!{" "}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Discover;
