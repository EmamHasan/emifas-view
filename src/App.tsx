import React, { useEffect, useState } from "react";
import SignCarousel from "./components/signCarousel";
import { slides } from "./data/carouselData.json";
import SignIn from "./components/sign-in";
import Titlebar from "./components/titlebar";
import SignUp from "./components/sign-up";
import PasswordLessUp from "./components/passwordLess";
import PasswordLessIn from "./components/passwordLessLogin";

const App: React.FC = () => {
  const [authPage, setAuthPage]=useState("sign-in");
  const handleAuthPage = (a: string)=>{
    setAuthPage(a);
  }

  return (
    <>
      <Titlebar />
      <div className="authPage items-center flex justify-center">
        <SignCarousel data={slides} />
        {authPage=="sign-in"?<SignIn handleAuthPage={handleAuthPage}/>:null}
        {authPage=="sign-up"?<SignUp handleAuthPage={handleAuthPage}/>:null}
        {authPage=="passwordlessUp"?<PasswordLessUp handleAuthPage={handleAuthPage}></PasswordLessUp>:null}
        {authPage=="passwordlessIn"?<PasswordLessIn handleAuthPage={handleAuthPage}></PasswordLessIn>:null}
      </div>
    </>
  );
};

export default App;
