import axios from "axios";

async function handler(req, res) {
  console.log("req.method in Signin:" + req.method);
  console.log("req.body.department:" + req.body.department);
  if (req.method === "POST") {
    try {
      const response = await axios.post(
        "http://localhost:5000/insert",
        {
            newCareer: req.body.newCareer,
        }
      );

      console.log('response.data:' + response.data.length);
      res.status(200).json(response.data);
    } catch (err) {
      console.log("err:" + err);
      res.status(401).json(err);
    }
  }
}

export default handler;
