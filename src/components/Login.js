import axios from "axios";
import React, {useState } from "react";
import { useHistory, Link } from 'react-router-dom';

  const credentials={
    email: "",
    password: ""
}
const Login = () => {
  const { push } = useHistory();

  const [userLogin, setUserLogin] = useState(credentials)
 
  const handleChange = e => {
    setUserLogin({
      userLogin: {
        ...userLogin,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = e => {
    e.preventDefault();
      axios.post('https://altrest-app.herokuapp.com/api/auth/login', userLogin)
        .then(res=>{
        localStorage.setItem("token", res.data.token);
          push('/');
          console.log("Clicked")
        })
          .catch(err=>{
        console.log(err);
      });
  };

  const error = ""
// ((userLogin.username === "") || (userLogin.password === "")) &&  "Username or Password not valid" 

  return (<section>
    <div className="form_section">
      <div data-testid="loginForm" className="login-form">
        <h1>Login</h1><br/>

        <form onSubmit={login}>
        <div className="form-group form-label mt-3">
          <label htmlFor="email">Email Address:  </label>
          <input
            className="form-control"
            type="text"
            name="email"
            data-testid="email"
            value={userLogin.email}
            onChange={handleChange}
            placeholder ="Enter Email Address"
          />
          </div>
         <div className="form-group form-label mt-3">
          <label htmlFor="password">Password: </label>
          <input
            className="form-control"
            type="password"
            name="password"
            data-testid="password"
            value={userLogin.password}
            onChange={handleChange}
            placeholder ="Enter Password"
          />
          </div>
          <button>Login</button>
        </form>

      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
    <p className="signup_login"> Don't have an account? <Link to="/signup">Register</Link></p>
    </section>
  );
};

export default Login;

