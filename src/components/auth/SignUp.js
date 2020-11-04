import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
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
      <section className="hero is-light is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="container heading is-size-5 has-text-centered mb-5">
              Icon
            </div>
            <div className="columns is-centered">
              <div className="column is-one-quarter">
                <div className="panel is-primary ">
                  <div className="panel-heading ">Sign up</div>
                  <div className="panel-block">
                    <form className="control">
                      <p className="control has-icon mt-4">
                        <input
                          className="input"
                          type="email"
                          placeholder="Email"
                          name="email"
                          id='email'
                        />
                        <span className="icon is-small">
                          <i className="fa fa-envelope"></i>
                        </span>
                      </p>
                      <p className="control has-icon">
                        <input
                          className="input is-expanded"
                          type="password"
                          placeholder="Password"
                          name="password"
                          id='password'
                        />
                        <span className="icon is-small">
                          <i className="fa fa-lock"></i>
                        </span>
                      </p>
                      <div className="control mb-3">
                        <div className="buttons is-right">
                          <button className="button is-primary" type="submit">
                            Sign up
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignUp;
