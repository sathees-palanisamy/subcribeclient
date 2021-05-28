import axios from 'axios';

async function handler(req, res) {
  console.log('req.method in Current:' + req.method );

  if (req.method === "GET") {
    try {
      const response = await axios.get(
        "http://localhost:5002/api/subcribe"
      ,{headers: req.headers});

      console.log('response.data:' + response.data[0]);
      res.status(200).json(response.data[0]);
    } catch (err) {
    res.status(401).json({ message: "Not authenticated!" });
  }
}

}

export default handler;
