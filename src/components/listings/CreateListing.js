import React, { Component } from "react";

import axios from 'axios';

class CreateListing extends Component {
  state = {
    itemName: "",
    categories: [],
    description: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:5000/listings', this.state)
    .then( res => {
      console.log(res);
    })
    .catch( error => {
      console.log(error);
    })
  };

  render() {
    return (
      <div className="container mt-5">
        <form>
          <div className="columns">
            {/* left */}
            <div className="column is-half">
              <div className="box mr-3">
                <div className="container has-background-primary-light has-text-grey has-text-centered py-2">
                  <div className="container pt-3">
                    <h1>Icon</h1>
                  </div>
                  <br />
                  <button className="button is-primary">Select Photos</button>
                  <div className="container my-3">
                    <h3>or drag photos here</h3>
                    <h3>(up to 10 photos)</h3>
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="column">
              <div className="field">
                <label className="label">Item Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Washing machine"
                    id="itemName"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Categories</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Electronics, Furniture"
                    id="categories"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <textarea className="textarea" placeholder="Textarea" id="description" onChange={this.handleChange}></textarea>
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link" onClick={this.handleSubmit}>Submit</button>
                </div>
                <div className="control">
                  <button className="button is-link is-light">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateListing;
