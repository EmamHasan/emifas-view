import React from "react";
interface SignInProps {
    handleAuthPage: (page: string) => void;
  }

const SignUp: React.FC<SignInProps> = ({handleAuthPage}) => {
  return (
    <div className="authCard">
      <h1>Hello, Human!</h1>
      <h3>Choose a way to Sign-Up</h3>

      <div className="auth-platforms">
        <div className="google platform">
          <img className="h-7 logo" src="/google.png" alt="Google Logo" />
        </div>
        <div className="github platform">
          <img className="h-7 logo" src="/github.png" alt="Github Logo" />
        </div>
      </div>
      <div className="or">
        <span className="dashh"></span>
        <h6>or Just..</h6>
        <span className="dashh" ></span>
      </div>
      <h4 onClick={()=>handleAuthPage("passwordlessUp")}>Passwordless sign-up with Email</h4>
      <h4 className="already" onClick={()=>handleAuthPage("sign-in")}>Already have an account?</h4>
    </div>
  );
};

export default SignUp;
