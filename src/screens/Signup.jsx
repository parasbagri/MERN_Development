// import React, { useState } from "react";
// import "./SignUp.css"; // Assuming you create a separate CSS file
// import { Link } from "react-router-dom";


// const SignUp = () => {
//    const [Credentials, setCredentials] = useState({
//     name:"",
//     email:"",
//     password:"",
//     location:"",
//    });  
//    // resetForm after submitted
//     // State ko reset karne ke liye ek function
//   const resetForm = () => {
//     setCredentials({ name: "", email: "", password: "" });
//   };
//    const onChange = (e) => {
//     setCredentials({...Credentials, [e.target.name]: e.target.value });
//    };
//     const handlSubmit = async(e) => {
//         e.preventDefault(); // synthetic event hai 
//         // Add your form submission logic here
//         const response = await fetch("http://localhost:2003/api/create",{
//             // form ka data send karna hoga jise body bolte hai
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 name: e.target.name.value,
//                 email: e.target.email.value,
//                 password: e.target.password.value,
//                 location: e.target.password.value
//             })
//         })
//         console.log("Form submitted", "and got response:");
//         const json = await response.json();
//         console.log(json);
//         if(json.errors[0].msg === "Email Invalide Please Try Again"){
//             alert("Email Invalide Please Try Again");
//         } 
//         resetForm();
//       };
//   return (
//     <div className="signup-container">
//       <form className="signup-form" onSubmit={handlSubmit}>
//         <h2>Sign up</h2>

//         <div className="form-group">
//           <label>Name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Name"
//             name="name"
//             value={Credentials.name} 
//             onChange={onChange}
//           />
//         </div>

//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Email" 
//             style={{color: 'white'}}
//             name="email"
//             value={Credentials.email}
//             onChange={onChange}
//           />
//         </div>

//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Password"
//             name="password"
//             value={Credentials.password}
//             onChange={onChange}
//           />
//         </div>
        
//         <div className="form-group">
//           <label>Your Current Address</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Current Location"
//             name="location"
//             value={Credentials.location}
//             onChange={onChange}
//           />
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Sign Up
//         </button>

//         <p className="login-link">
//           Already have an account? <a href="#">Log In</a>
//         </p>

//         <div className="divider">or</div>

//         <button type="button" className="btn google-btn">
//           Sign up with Google
//         </button>
//         <Link to='/login' className="m-3 btn btn-danger">Already a user</Link>
//       </form>
//     </div>
//   );
// };

// export default SignUp;





















import "./SignUp.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [Credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  // Form reset function
  const resetForm = () => {
    setCredentials({ name: "", email: "", password: "", location: "" });
  };

  // Handle input change
  const onChange = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handlSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // API call
    const response = await fetch("http://localhost:2003/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Credentials), // Send state data
    });

    // Get response and process it
    const json = await response.json();
    console.log("Form submitted", json);

    // Check for errors and alert if necessary
    if (json.errors && json.errors[0].msg === "Email Invalide Please Try Again") {
      alert("Email Invalide Please Try Again");
    } else {
      // Reset the form on successful submit
      resetForm();
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handlSubmit}>
        <h2>Sign up</h2>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={Credentials.name}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={Credentials.email}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={Credentials.password}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <label>Your Current Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Current Location"
            name="location"
            value={Credentials.location}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>

        <p className="login-link">
          Already have an account? <a href="#">Log In</a>
        </p>

        <div className="divider">or</div>

        <button type="button" className="btn google-btn">
          Sign up with Google
        </button>
        <Link to="/login" className="m-3 btn btn-danger">
          Already a user
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
