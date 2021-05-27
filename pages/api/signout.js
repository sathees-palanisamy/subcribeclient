import axios from 'axios';
import { serialize } from 'cookie';

async function handler(req, res) {
  console.log('req.method in Signout:' + req.method );

  if (req.method === "POST") {
    try {
      const response = await axios.post('http://localhost:5001/api/users/signout', {});

      res.setHeader('Set-Cookie', serialize('express:sess','', { path: '/' }));

      res.status(200).json({});
    } catch (err) {
      console.log('err:' + err);
    res.status(401).json({ message: "Not authenticated!" });
  }
}

}

export default handler;
