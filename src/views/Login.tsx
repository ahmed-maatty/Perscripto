import React, { useState } from "react";
import Input from "../components/Input";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <form
        action="post"
        className="auth_form px-6 py-8 w-1/4"
        onSubmit={submitHandler}
      >
        <div className="form_title mb-4">
          <h3 className="mb-1 text-xl font-medium">Login</h3>
          <p>Please login to book appointment</p>
        </div>
        <Input
          inputName="email"
          inputPlaceHolder="Enter Your Email"
          inputType="email"
          labelTxt="email"
          onChange={changeHandle}
          value={formData.email}
        />
        <Input
          inputName="password"
          inputPlaceHolder="Enter Your Password"
          inputType="password"
          labelTxt="password"
          onChange={changeHandle}
          value={formData.password}
        />
        <button
          type="submit"
          className="w-full px-4 py-2 text-lg capitalize cursor-pointer mb-3"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
