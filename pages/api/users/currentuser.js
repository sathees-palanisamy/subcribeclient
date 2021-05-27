import axios from 'axios';

async function handler(req, res) {
  console.log('req.method in Current:' + req.method );

  if (req.method === "GET") {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/users/currentuser"
      ,{headers: req.headers});

      res.status(200).json(response.data);
    } catch (err) {
    res.status(401).json({ message: "Not authenticated!" });
  }
}

}

export default handler;
