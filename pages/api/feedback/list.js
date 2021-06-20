import axios from 'axios';

async function handler(req, res) {
  console.log('req.method in Current:' + req.method );

  if (req.method === "GET") {
    try {

      const cookieExt = req.headers['authorization'];
      console.log('cookieExt:' + cookieExt);
      const remlastp = cookieExt.split("Bearer ");
      console.log('remlastp[1]:' + remlastp[1]);
      const cookie = remlastp[1];
      console.log('cookie:' + cookie);

      const response = await axios.get(
        "http://localhost:8000/v1/listFeedback"
        ,{headers: {
          "Content-Type": "application/json",
          // Cookie: `token=${cookie};`,
          Authorization: `Bearer ${cookie}`
         }});

      console.log('response.data:' + response.data);
      res.status(200).json(response.data);
    } catch (err) {
    res.status(401).json({ message: "Internal Server Error" });
  }
}

}

export default handler;
