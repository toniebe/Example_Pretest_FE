import React from "react";
import Input from "../../components/input";
import Cookies from "js-cookie";
import "./auth.css";
import { Navigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = (e) =>{
    e.preventDefault();
    const res = fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    res.then((res) => {
      if (res.status === 200) {
        Cookies.set("token", "12345");
        <Navigate to="/dashboard" />;
      }
    });

  }

    
  return (
    <div id="auth">
      <div className="row h-100">
        <div className="col-lg-5 col-12">
          <div id="auth-left">
            <h1 className="auth-title">Log in.</h1>
            <p className="auth-subtitle mb-5">
              Log in with your data that you entered during registration.
            </p>

            <form onSubmit={handleSubmit}>
              <Input
                type={"email"}
                placeholder={"email@example.com"}
                icon={"bi bi-person"}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Input
                type={"password"}
                placeholder={"******"}
                icon={"bi bi-lock"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <div class="form-check form-check-lg d-flex align-items-end">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label text-gray-600"
                  for="flexCheckDefault"
                >
                  Keep me logged in
                </label>
              </div>
              <button className="btn btn-primary btn-block btn-lg shadow-lg mt-5">
                Log in
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-7 d-none d-lg-block">
          <div id="auth-right"></div>
        </div>
      </div>
    </div>
  );
}
