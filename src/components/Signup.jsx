import React from "react";
import {account} from "../services/AppWriteConfig";
const Signup = () => {
  const [userData, setUserData] = React.useState({
    userId: "",
    name: "",
    email: "",
    password: "",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.password.length < 8)
      alert("Password must be atleast 8 characters long");
    try {
      console.log(userData);
      await account.create(userData.userId,userData.email,userData.password,userData.name)
      console.log("Account created successfully");
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <h2 className="mt-5 text-center">Super Auth</h2>
      <h3 className=" text-center">Signup</h3>

      <form className="container" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            aria-describedby="name"
            name="email"
            onChange={(e) => {
              setUserData((pv)=>({...pv,name:e.target.value}))
            }
            }
          />
        </div>
        <div className="mb-3">
          <label for="name" className="form-label">
            UserId
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="userid"
            aria-describedby="UserId"
            name="userid"
            onChange={(e) => {
              setUserData((pv)=>({...pv,userId:e.target.value}))
            }
            }
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email address
          </label>
          <input
            required
            type="email"
            className="form-control"
            id="email"
            aria-describedby="email"
            name="password"
            onChange={(e) => {
              setUserData((pv)=>({...pv,email:e.target.value}))
            }
            }
          />
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            required
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={(e) => {
              setUserData((pv)=>({...pv,password:e.target.value}))
            }
            }
          />
        </div>
        <button type="submit" className="btn btn-success">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
