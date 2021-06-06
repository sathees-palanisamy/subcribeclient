import axios from "axios";
const crypto = require("crypto");

async function handler(req, res) {
  console.log("req.method in Signin:" + req.method);
  if (req.method === "POST") {

    console.log('req.body.detail:' + req.body.detail);
    console.log('req.body.email:' + req.body.email);
    console.log('req.body.date:' + req.body.date);

    let formData = req.body;
    let inputEmail = req.body.email;
    let inputDate = req.body.date;


    const iv = "1010101010101010";
    let key = "3131313131313131313131313131313131313131313131313131313131313131";

    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key, "hex"), Buffer.from(iv));
    cipher.setAutoPadding(true)
    let crypt = cipher.update(req.body.detail, 'utf8', 'base64');
    crypt += cipher.final("base64");

    formData.detail = crypt
    let inputDetail = crypt
    
    /* axios details */

    try {
      const response = await axios.post(
        "http://localhost:8000/v1/feedback/createFeedback",
        {
          "email" : inputEmail,
          "detail" : inputDetail,
          "date" : inputDate
        },

        {headers: {
          'Content-Type': 'application/json',
           Accept: 'application/json'
      }
        
        }
      );

      res.status(200).json(response.data);
    } catch (err) {
      console.log("err:" + err);
      res.status(401).json( err.response.data );
    }
  }
}

export default handler;
