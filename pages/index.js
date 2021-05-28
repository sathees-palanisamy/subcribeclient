import buildClient from '../api/build-client';
import { useState , useEffect, useContext} from 'react';
import axios from 'axios';
import { useRouter } from "next/router";
import DepartmentContext from '../store/department-context';

const LandingPage = ({ currentUser }) => {
  const departmentCtx = useContext(DepartmentContext);
  const [depList, SetDepList] = useState([]);
  console.log('currentUser:' + currentUser);
  const router = useRouter();

  const updateCatery= (cate) => {
    departmentCtx.showDepartment(cate);

    //props.cateUpateExec(cate);
    router.push("/career");

}

  useEffect( () => {
     axios.get("/api/subcribe")
     .then((response) => {
      SetDepList([...response.data.departlist]);
      
        })
     .catch((error) => {
       console.log(error)
     }); 
 
  },[]);
 

  const depRenderList = depList.map((sinDep,index) => {
 
    return(
   <div key={index} className="p-col-12" onClick={(e) => updateCatery(sinDep)}>

      <div className="product-list-item"> 

      <div className="product-list-detail">
            <br></br>

            <div >
             
            <div className="product-name">{sinDep}</div>
            </div>
            <br></br>
        </div>

      </div>
    
   </div> 
    );
   });


  return currentUser ? (
    <div className="container">
      <div className="dataview-demo"> 
          {depRenderList}
      </div>

    </div>
  ) : (
    <h1>You are NOT signed in</h1>
  );
};

LandingPage.getInitialProps = async context => {
  console.log('LANDING PAGE!');
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');
  console.log('data:' + data.currentUser);

  return data;
};

export default LandingPage;

