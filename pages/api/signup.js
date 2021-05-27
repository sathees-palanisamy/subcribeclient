import axios from "axios";
import { serialize } from "cookie";

async function handler(req, res) {
  console.log("req.method in Signin:" + req.method);
  if (req.method === "POST") {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/users/signup",
        {
          email: req.body.email,
          password: req.body.password,
        }
      );

      res.status(200).json(response.data);
    } catch (err) {
      console.log("err:" + err);
      console.log("err.response.data.errors:" + err.response.data.errors.length);
      res.status(401).json( [...err.response.data.errors] );
    }
  }
}

export default handler;
