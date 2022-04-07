import React from "react";
import ReactDOM from "react-dom";
import { GoogleLogin } from "react-google-login"; // instalar previamente -> npm install react-google-login

const responseGoogle = (response) => {
  console.log(response);
  console.log(response.profileObj);
};

ReactDOM.render(
  <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com" // TODO -> https://console.cloud.google.com/apis
    buttonText="Login"
    //render={renderProps => (
    //  <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
    //)}
    onSuccess={responseGoogle} // TODO
    onFailure={responseGoogle} // TODO
    cookiePolicy={"single_host_origin"}
  />,
  document.getElementById("googleButton")
);

// utils:
// API documentation: https://www.npmjs.com/package/react-google-login
// Explicacion: https://www.youtube.com/watch?v=OhS0wN5Y6mE
