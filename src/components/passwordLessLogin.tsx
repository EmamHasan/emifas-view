import React, { useState } from "react";

interface SignInProps {
  handleAuthPage: (page: string) => void;
}

const PasswordLessIn: React.FC<SignInProps> = ({ handleAuthPage }) => {
  const [email, setEmail] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [btnText, setBtnText] = useState<string>("Send Magic");

  const doneSend = () => {
    setIsButtonDisabled(true);
    // Simulate sending magic link
    setTimeout(() => {
        setBtnText("Magic link Sent")
    }, 1000);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className="authCard">
      <h1>Passwordless Sign-In</h1>
      <ol className="text-start list-inside list-decimal px-6 text-xs">
        <li>
          Submit your <span className="font-bold">email address</span>.
        </li>
        <li>
          You will receive an email with a "
          <span className="font-bold">magic</span>" link.{" "}
        </li>
        <li>Click on the link and you will be automatically signed in.</li>
      </ol>
      <div className="magicFields grid">
        <input
          className="enterEmail"
          type="email"
          value={email}
          onChange={handleEmailChange}
          disabled={isButtonDisabled}
        />
        <button
          id="send-magic"
          onClick={doneSend}
          className="sendMagic"
          type="button"
          disabled={isButtonDisabled || !email}
        >
          {btnText}
        </button>
      </div>

      <div className="or">
        <span className="dashh"></span>
        <h6>or Just..</h6>
        <span className="dashh"></span>
      </div>
      <h4 className="already" onClick={() => handleAuthPage("sign-in")}>
        Use a different sign-in provider
      </h4>
    </div>
  );
};
export default PasswordLessIn;
