import React from "react";
import "../Pages/Login.css";
function Login() {
  return (
    <div className="login-background">
      <div className="login-background">
        <img
          className="login-background"
          src="\Disney Plus\images\login-background.jpg"
          alt=""
        />
      </div>
      <div className="cta-logos">
        <img
          className="cta-logo-one"
          src="\Disney Plus\images\cta-logo-one.svg"
          alt=""
        />
        <div className="signup">GET ALL THERE</div>
        <div className="signup-description">
            <p className="signup-description">Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</p>
        </div>
        <div className="cta-logo-two">
        <img
          className="cta-logo-two"
          src="\Disney Plus\images\cta-logo-two.png"
          alt=""
        />
        </div>
      </div>
    </div>
  );
}

export default Login;
