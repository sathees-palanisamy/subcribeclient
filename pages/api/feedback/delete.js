import axios from "axios";

async function handler(req, res) {
  console.log("req.method in Signin:" + req.method);
  if (req.method === "POST") {

    console.log('req.body.id:' + req.body.id);
    console.log('req.body.detail:' + req.body.detail);
    console.log('req.body.email:' + req.body.email);
    console.log('req.body.date:' + req.body.date);

    let inputEmail = req.body.email;
    let inputDate = req.body.date;
    let inputDetail = req.body.detail;
    let inputId = req.body.id;
    
    /* axios details */

    try {
      const response = await axios.post(
        "http://localhost:8000/v1/feedback/deleteFeedback",
        {
            "id" : inputId,
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
