import React, { useState } from "react";
import SectionContainer from "../../Components/Layout/SectionContainer/SectionContainer";
import SignIn from "../../Components/Items/SignInItem/SignInItem";
import SignUp from "../../Components/Items/SignUpItem/SignUpItem";
import "./Sign.scss";

const Sign = () => {
  const [compRender, setCompRender] = useState("sign-in");
  return (
    <SectionContainer Tag="section" Class="sign-section">
      <div className="Sign-container">
        {compRender === "sign-in" ? <SignIn /> : <SignUp />}
        <div className="text-center">
          {compRender === "sign-in" ? (
            <span
              className="sign-question"
              onClick={() => setCompRender("sign-up")}
            >
              Create Your Account ?
            </span>
          ) : (
            <span
              className="sign-question"
              onClick={() => setCompRender("sign-in")}
            >
              Already Have Account ? Login
            </span>
          )}
        </div>
      </div>
    </SectionContainer>
  );
};
export default Sign;
