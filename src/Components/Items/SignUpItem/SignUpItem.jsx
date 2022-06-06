import React, {Component} from "react";
import SignContainer from "../../Layout/SignContainer/SignContainer";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../Custom-button/CustomButton";

import {auth, createUserDoc} from "../../../Firebase/Firebase-config";
import {createUserWithEmailAndPassword} from "firebase/auth";

class SignUpItem extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const {displayName, email, password} = this.state;
    try {
      const {user} = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createUserDoc(user, {displayName});
      this.setState({
        displayName: "",
        email: "",
        password: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (e) => {
    const {value, name} = e.target;
    this.setState({[name]: value});
  };
  render() {
    const {displayName, email, password} = this.state;
    return (
      <SignContainer>
        <div className="head-box text-center">
          <span className="sign-head">Do not have a account ?</span>
          <span className="sign-text">
            Sign up with your email and password
          </span>
        </div>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            handleChange={this.handleChange}
            value={displayName}
            label="Name"
            required
          />
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </SignContainer>
    );
  }
}

export default SignUpItem;
