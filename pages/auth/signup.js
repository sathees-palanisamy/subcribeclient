import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/signup", {
        email: email,
        password: password,
      });

      console.log("id:" + response.data.id);
      setErrors(
        <div className="alert alert-danger">
          <h4>Sucessfully Signed up. Please sign in</h4>
        </div>
      );
    } catch (err) {
      setErrors(
        <div className="alert alert-danger">
          <h4>Ooops....Already signed up</h4>
          <ul className="my-0">
            {err.response.data.map(err => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <form onSubmit={onSubmit} className="container">
      <h1>Sign Up</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
        />
      </div>

      <button className="btn btn-primary">Sign Up</button>
      <br></br>
      <br></br>
      {errors}
    </form>
  );
};
