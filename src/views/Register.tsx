import React, { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <form
        action={"post"}
        className="auth_form px-6 py-8 w-1/4"
        onSubmit={submitHandler}
      >
        <div className="form_title mb-4">
          <h3 className="mb-1 text-xl font-medium">Create Account</h3>
          <p>Please sign up to book appointment</p>
        </div>
        <Input
          inputType={"text"}
          labelTxt={"username"}
          inputName={"username"}
          inputPlaceHolder={"Enter Your Username"}
          value={formData.username}
          onChange={handleChange}
        />
        <Input
          inputType={"email"}
          labelTxt={"email"}
          inputName={"email"}
          inputPlaceHolder={"Enter Your email"}
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          inputType={"password"}
          labelTxt={"password"}
          inputName={"password"}
          inputPlaceHolder={"Enter Your password"}
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full px-4 py-2 text-lg capitalize cursor-pointer mb-3"
        >
          create account
        </button>
        <Link to={"/auth/login"} className="capitalize underline">
          {" "}
          already have an account ?
        </Link>
      </form>
    </div>
  );
}

export default Register;
