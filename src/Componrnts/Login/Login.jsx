import React from "react";

const LoginForm = () => {
  return (
    <form>
      <div>
        <input placeholder={"Login"} />
      </div>
      <div>
        <input placeholder={"Password"} />
      </div>
      <div>
        <input placeholder={"checkbox"} />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
export default LoginForm;
