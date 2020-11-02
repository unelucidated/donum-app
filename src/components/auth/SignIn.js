import React, { Component } from "react";

class SignIn extends Component {
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
      <section class="hero is-light is-fullheight">
        <div class="hero-body">
          <div className="container">
            <div className="container heading is-size-5 has-text-centered mb-5">
              Icon
            </div>
            <div className="columns is-centered">
              <div className="column is-one-quarter">
                <div class="panel is-primary ">
                  <div class="panel-heading ">Sign In</div>
                  <div class="panel-block">
                    <form class="control">
                      <p class="control has-icon mt-4">
                        <input
                          class="input"
                          type="email"
                          placeholder="Email"
                          name="email"
                          id='email'
                          autofocus
                        />
                        <span class="icon is-small">
                          <i class="fa fa-envelope"></i>
                        </span>
                      </p>
                      <p class="control has-icon">
                        <input
                          class="input is-expanded"
                          type="password"
                          placeholder="Password"
                          name="password"
                          id='password'
                        />
                        <span class="icon is-small">
                          <i class="fa fa-lock"></i>
                        </span>
                      </p>
                      <p class="control mb-3">
                        <div className="buttons is-right">
                          <button class="button is-primary" type="submit">
                            Sign In
                          </button>
                        </div>
                      </p>
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

export default SignIn;
