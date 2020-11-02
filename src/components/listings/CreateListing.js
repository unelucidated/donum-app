import React, { Component } from "react";

class CreateListing extends Component {
  state = {
    images: [],
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
  };

  render() {
    return (
      <div className="container mt-5">
        <form>
          <div className="columns">
            {/* left */}
            <div className="column is-half">
              <div class="box mr-3">
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
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Description</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Textarea" id="description"></textarea>
                </div>
              </div>
              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-link">Submit</button>
                </div>
                <div class="control">
                  <button class="button is-link is-light">Cancel</button>
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
