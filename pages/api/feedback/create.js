import axios from "axios";
import { deserialize } from "v8";
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
    let inputDetail = req.body.detail;

    console.log('req.body.detail:' + req.body.detail);


    const iv = "1010101010101010";
    let key = "3131313131313131313131313131313131313131313131313131313131313131";

    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key, "hex"), Buffer.from(iv));
    cipher.setAutoPadding(true)
    let crypt = cipher.update(inputDetail, 'utf8', 'base64');
    crypt += cipher.final("base64");    
    
    formData.detail = crypt
    console.log('Before inputDetail:' + inputDetail);
    inputDetail = crypt
    console.log('After  inputDetail:' + inputDetail);
    
    /* axios details */

    const cookieExt = req.headers['authorization'];
    console.log('cookieExt:' + cookieExt);
    const remlastp = cookieExt.split("Bearer ");
    console.log('remlastp[1]:' + remlastp[1]);
    const cookie = remlastp[1];
    console.log('cookie:' + cookie);
    
    // const initParse = cookieExt[0];
    // const remFirstp = initParse.replace(/^express:sess=/, "");
    // const remlastp = remFirstp.split("; path=/;");
    // console.log('remlastp[0]:' + remlastp[0]);

    try {

      // var cookie = 'eyJqd3QiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJall3T1dGaE4yRmpNemhqTTJFeFlUUXhPV1kxT1dSaVppSXNJbVZ0WVdsc0lqb2ljekZBWjIxaGFXd3VZMjl0SWl3aWFXRjBJam94TmpJME1UYzNOall6ZlEuS3QySlFvOXZGVTVzMnpSbGh0dGdDenJYUkJXSDdvM0VuSnV0RlU1SHhVSSJ9'

      const response = await axios.post(
        "http://localhost:8000/v1/createFeedback",
        {
          "email" : inputEmail,
          "detail" : inputDetail,
          "date" : inputDate
        },{
        headers: {
          "Content-Type": "application/json",
          // Cookie: `token=${cookie};`,
          Authorization: `Bearer ${cookie}`
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
