import "./Login.css"
import { useState } from "react";
import { Link,Navigate, useNavigate } from "react-router-dom";
const Login = () =>{
   const [credentials, setCredentials] = useState({
      email: "",
      password: "",
    });
    let navigate = useNavigate()

    // Form reset function
  const resetForm = () => {
    setCredentials({ email: "", password: "" });
  };

  // onchange handler for inputs form
  const onChange = (e) =>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  // form submmission
  const handleForm = (e) =>{
   e.preventDefault();
    // Send the form data to your server here
    fetch('http://localhost:2003/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Redirect to the dashboard
        // or set a local storage token for future use
        console.log('Logged in successfully');
        localStorage.setItem("authToken", data.authToken);
        console.log("localStorageData:",localStorage.getItem("authToken"));
        console.log(data)
        navigate("/")
      } else {
        console.error('Failed to log in');
      }
    })
    .catch(error => console.error('Error:', error));
    resetForm(); // Reset form after submission to clear input fields
  }
    return (
    <div className="body-login">   
        <div className="login-page">
          <div className="login-left">
            <h1>Welcome to FastFu</h1>
            <p>Sign into your account</p>
            <form onSubmit={handleForm}>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={credentials.email}
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={onChange}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Log In
              </button>
              {/* <a href="#" className="forgot-password mt-3 d-block">
                Forgot password?
              </a> */}
            </form>
          </div>
          <div className="login-right">
            <img
              src="https://images.pexels.com/photos/15881344/pexels-photo-15881344/free-photo-of-delicious-curry-soup.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your illustration image
              alt="Login Illustration"
            />
            <Link to="/api/create" className="btn google-btn">Create User</Link>
          </div>
        </div>
    </div>
      );
}
export default Login;