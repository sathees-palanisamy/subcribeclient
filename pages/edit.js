import { useEffect,useState } from 'react';
import buildClient from '../api/build-client';
import axios from "axios";

const EditSubCribe = ({ currentUser }) => {

const [depList, SetDepList] = useState([]);
const [newDepList, SetNewDepList] = useState([]);
const [checkBoxList,setCheckBoxList] = useState([]);
const [subId,setSubID] = useState('');
const curDepList = [
      "Information Technology",
      "Textile",
      "Automobile",
      "Medical Science",
      "Marine",
      "Business Management",
      "Agriculture & Biology",
      "Electrical & Electronics",
      "Chemical",
      "Communication",
      "Civil",
      "Mech & Manufacturing",
      "Entertainment",
      "Aerospace",
      "Physics",
      "Maths",
      "Arts and Hotel"
];



const handleCheckboxClick = (event,checkBoxDepart) => {

 
  let newCheckObj = [...checkBoxList];

  newCheckObj.map((singleCObj,index) => { 

    if (singleCObj.department === checkBoxDepart.department) {
      let newState = newCheckObj[index].subcribed;
      newCheckObj[index].subcribed = !newState;
      if (newCheckObj[index].subcribed === true ) {
        let newdepList = [...newDepList,newCheckObj[index].department];
        SetNewDepList([...newdepList]);
      } else {
        const newlist2 = depList.map((dep1) => dep1!== checkBoxDepart.department)
      }
    }
  
  });

  setCheckBoxList([...newCheckObj]);

}

const submitHandler = (event) => {
  event.preventDefault();
  try {
    const response = axios.put("/api/updatesubcribe", {
      id: subId,
      depart: [...newDepList],
    });
  
  } catch (err) {
    console.log('err:'+ err);
  }

}


 useEffect( () => {
   var newList1 = [];
   axios.get("/api/subcribe")
    .then((response) => {
    setSubID(response.data.id);
    SetDepList([...response.data.departlist]);
    if (newDepList.length === 0) {
      SetNewDepList([...response.data.departlist]);
      newList1 = [...response.data.departlist];
    } else {
      newList1 = [...newDepList];
    }

    const checkBoxInitObj = curDepList.map((sinDep,index) => {
      let subcribedValue = false
    
      for (let j=0; j < newList1.length;j++) {
        if (newList1[j] === sinDep) {
          subcribedValue = true;
        }
      }
    
      return {
        "department": sinDep,
        "subcribed": subcribedValue
      }
    })
     setCheckBoxList([...checkBoxInitObj]);
   

  })
    .catch((error) => {
      console.log(error)
    }); 
    

 },[]);


 const depRenderList = checkBoxList.map((sinDep,index) => {
 
  return(
 <div key={index}> 
   <input type="checkbox" checked={sinDep.subcribed} onChange={(e) => handleCheckboxClick(e,sinDep)}></input>
   <span> </span><label>{sinDep.department}</label>
 </div> 
  );
 });


 const finalRenderDep =  <div className="p-d-flex p-flex-column">
   {depRenderList}
 </div>

  return currentUser ? (
    <div className="container">
      <br></br>
    <h2>Subcribed Department List</h2>
    <br></br>
    <div>
    {finalRenderDep}
    </div>
    <br></br>
   <button onClick={submitHandler}>Submit</button>
    </div>
 
    
  ) : (
    <h1>You are NOT signed in</h1>
  );
};

EditSubCribe.getInitialProps = async context => {
  console.log('Edit Page!');
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');
  console.log('data:' + data.currentUser);

  return data;
};

export default EditSubCribe;

