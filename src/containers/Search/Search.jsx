import React, { Component } from "react";
import API from "../../util/API";
import SearchForm from "../../components/SearchForm/SearchForm";

class Search extends Component {
  state = {
    search: "",
    results: [],
    error: "",
    breeds: [],
  };

  componentDidMount() {
    API.getBreedList()
      .then((res) => this.setState({ breeds: res.data.message }))
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getBreedPhoto(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  render() {
    return (
      <div className="container" style={{ minHeight: "80%" }}>
        <h1 className="text-center">Search By Breed</h1>
        <div
          role="alert"
          className="alert alert-danger fade in"
          style={{
            width: "80%",
            margin: "0 auto",
            marginTop: 18,
            opacity: this.state.error ? 1 : 0,
            marginBottom: 10,
          }}
        >
          {this.state.error}
        </div>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          breeds={this.state.breeds}
        />
        <ul className="list-group search-results">
          {this.state.results.map((result) => (
            <li key={result} className="list-group-item">
              <img
                alt="Dog"
                src={result}
                className="img-fluid"
                style={{ height: 400, margin: 0 }}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Search;
