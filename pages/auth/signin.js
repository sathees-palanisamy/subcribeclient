import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from 'js-cookie';

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [errors, setErrors] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/signin", {
        email: email,
        password: password,
      });

      console.log("cookie:" + Cookies.get('express:sess'));

      let newtoken = atob(Cookies.get('express:sess'));

      let strfyData = "'"+ newtoken + "'";

      const strSpl = strfyData.split(":");
      const strSpl2 = strSpl[1].split("}");
      const strSpl3 = strSpl2[0].split('"');

      localStorage.setItem('token', strSpl3[1]);


      router.push("/");
    } catch (err) {
      console.log('err:' + err);

      // for(let i=0; i< err.message.length;i++) {
      //     console.log('err.message:' + err.message[i]);
      // }
      
      setErrors(
        <div className="alert alert-danger">
          <h4>Ooops....You are not authenticated</h4>
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
      <h1>Sign In</h1>
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
    
      <button className="btn btn-primary">Sign In</button>
      <br></br>
      <br></br>
      {errors}
    </form>
  );
};
