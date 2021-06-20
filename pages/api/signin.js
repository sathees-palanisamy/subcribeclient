import axios from "axios";
import { serialize } from "cookie";

async function handler(req, res) {
  console.log("req.method in Signin:" + req.method);
  if (req.method === "POST") {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/users/signin",
        {
          email: req.body.email,
          password: req.body.password,
        }
      );
      const headersDet = { ...response.headers };
      const cookieExt = headersDet["set-cookie"];
      const initParse = cookieExt[0];
      const remFirstp = initParse.replace(/^express:sess=/, "");
      const remlastp = remFirstp.split("; path=/;");

      console.log("remlastp[0]:", remlastp[0])

      res.setHeader(
        "Set-Cookie",
        serialize("express:sess", remlastp[0], { path: "/" })
      );

      res.status(200).json(response.data);
    } catch (err) {
      console.log("err.response.data.errors:" + err.response.data.errors.length);
      res.status(401).json( [...err.response.data.errors] );
    }
  }
}

export default handler;
