import React, { useEffect, useState } from "react";
import SignCarousel from "./components/signCarousel";
import { slides } from "./data/carouselData.json";
import SignIn from "./components/sign-in";
import Titlebar from "./components/titlebar";
import SignUp from "./components/sign-up";
interface Slide {
  src: string;
  alt: string;
}
interface SignCarouselProps {
  data: Slide[];
}
const App: React.FC = () => {
  const [authPage, setAuthPage]=useState("sign-in");
  const handleAuthPage = (a: string)=>{
    setAuthPage(a);
  }
  useEffect(()=>{
    // if (authPage=="sign-in"){
    //   SignUp.
    // }
  }, [authPage])
  return (
    <>
      <Titlebar />
      <div className="authPage items-center flex justify-center">
        <SignCarousel data={slides} />
        {authPage=="sign-in"?<SignIn handleAuthPage={handleAuthPage}/>:null}
        {authPage=="sign-up"?<SignUp handleAuthPage={handleAuthPage}/>:null}
      </div>
    </>
  );
};

export default App;
