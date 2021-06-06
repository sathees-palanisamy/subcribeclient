import axios from 'axios';

async function handler(req, res) {
  console.log('req.method in Current:' + req.method );

  if (req.method === "GET") {
    try {
      const response = await axios.get(
        "http://localhost:8000/v1/feedback/listFeedback");

      console.log('response.data:' + response.data);
      res.status(200).json(response.data);
    } catch (err) {
    res.status(401).json({ message: "Internal Server Error" });
  }
}

}

export default handler;
