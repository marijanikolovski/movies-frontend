import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "../store/user/slice";
import { Button } from "react-bootstrap";

export const AppRegister = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    if (credentials.password_confirmation !== credentials.password) {
      alert("Password and confirm password should be same!");
      return;
    }

    dispatch(register(credentials));
    console.log("register successfully");
    history.push("/login");
  }

  return (
    <div>
      <h2 className="fw-bold mb-3 pt-5 mt-md-5 mb-2 text-center text-uppercase ">
        Register
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="mb-2"
            required
            value={credentials.name}
            placeholder="Full Name"
            onChange={({ target }) =>
              setCredentials({ ...credentials, name: target.value })
            }
          />
        </div>
        <div>
          <input
            className="mb-2"
            required
            value={credentials.email}
            type="email"
            placeholder="Email"
            onChange={({ target }) =>
              setCredentials({ ...credentials, email: target.value })
            }
          />
        </div>
        <div>
          <input
            className="mb-2"
            required
            value={credentials.password}
            type="password"
            placeholder="Password"
            onChange={({ target }) =>
              setCredentials({ ...credentials, password: target.value })
            }
          />
        </div>
        <div>
          <input
            required
            type="password"
            placeholder="Confirm password"
            value={credentials.password_confirmation}
            onChange={({ target }) =>
              setCredentials({
                ...credentials,
                password_confirmation: target.value,
              })
            }
          />
        </div>
        <Button className="mt-2" type="onsubimt">Register</Button>
      </form>
    </div>
  );
};
