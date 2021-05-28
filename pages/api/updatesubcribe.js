import axios from "axios";
import { serialize } from "cookie";

async function handler(req, res) {
  console.log("req.method in Signin:" + req.method);
  if (req.method === "PUT") {
      console.log('req.body.id:' + req.body.id);
    try {
      const response = await axios.put(
        `http://localhost:5002/api/subcribes/${req.body.id}`,
        {
            departlist: [...req.body.depart],
        }
        ,{headers: req.headers}
      );
  
      res.status(200).json(response.data);
    } catch (err) {
      res.status(401).json( [...err.response.data.errors] );
    }
  }
}

export default handler;
