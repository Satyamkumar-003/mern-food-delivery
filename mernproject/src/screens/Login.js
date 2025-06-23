import React from "react";
import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  let navigate=useNavigate()
  //  handle then input and sending to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      if (json.error) {
        // validation error
        alert("Validation Error: " + json.error[0].msg);
      } else {
        alert("Enter valid credentials");
      }
    }
    if(json.success){
      localStorage.setItem("userEmail",credentials.email);
      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"))
      navigate("/");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div>
        <div className="container mt-4">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={credentials.email}
                onChange={onChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={credentials.password}
                onChange={onChange}
                required
              />
            </div>

            <button type="submit" className="m-2 btn btn-success">
              Submit
            </button>
            <Link to="/createuser" className="m-2 btn btn-danger">
              I'm a new user
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
