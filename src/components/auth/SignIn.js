import React, { Component } from 'react';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    
    render() {
        return (
            <div className="container">
                this is my sign in page
            </div>
        );
    }
}

export default SignIn;
