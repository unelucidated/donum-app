import React from "react";

const SignedOutLinks = () => {
  return (
    <div>
      <a href="/signup" className="button is-primary">
        <strong>Sign Up</strong>
      </a>
      <a href="/signin" className="button is-light">
        Log in
      </a>
    </div>
  );
};

export default SignedOutLinks;
