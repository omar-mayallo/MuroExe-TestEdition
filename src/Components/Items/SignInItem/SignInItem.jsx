import React, {Component} from "react";
import SignContainer from "../../Layout/SignContainer/SignContainer";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../Custom-button/CustomButton";

import {
  signInWithGoogle,
  auth,
  signInWithFacebook,
} from "../../../Firebase/Firebase-config";
import {signInWithEmailAndPassword} from "firebase/auth";

import "./SignInItem.scss";

class SignInItem extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({email: "", password: ""});
    } catch (err) {
      // console.log(err);
    }
  };

  handleChange = (event) => {
    const {value, name} = event.target;
    this.setState({[name]: value});
  };
  render() {
    const {email, password} = this.state;
    return (
      <SignContainer>
        <div className="head-box text-center">
          <span className="sign-head">Already have account?</span>
          <span className="sign-text">
            Sign in with your email and password
          </span>
        </div>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
        <CustomButton onClick={signInWithGoogle} isGoogle className="my-4">
          Sign In With Google
        </CustomButton>
        <CustomButton onClick={signInWithFacebook} isFacebook>
          Sign In With Facebook
        </CustomButton>
      </SignContainer>
    );
  }
}
export default SignInItem;
