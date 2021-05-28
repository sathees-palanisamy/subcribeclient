import React, { useState, useContext,useEffect } from "react";
import DepartmentContext from '../store/department-context';
import buildClient from '../api/build-client';
import axios from "axios";

function career(props){
  const departmentCtx = useContext(DepartmentContext);

  console.log('departmentCtx.department:' + departmentCtx.department);
  console.log('props:' + props);

  const [careerDet,setCareerDet] = useState([]);
  const [category,setCategory] = useState(departmentCtx.department);
  const [errors, setErrors] = useState('');
  const tempUpdateClick = (id, ix) => {
 //   props.UpdateClickExec(id);
  };

  useEffect( () => {

      axios.post("/api/list", {
        department: departmentCtx.department,
      })
      .then((response) => {
        console.log('response.data:' + response.data);
        setCareerDet([...response.data]);
      })
      .catch((error) => {
        console.log(error)
      }); 

 },[]);

  console.log("careerDet:", careerDet.length);
  let noContent;

  if (careerDet.length === 0) {
    noContent = (
      <div className="container">
        <div className="card"> 

          <img src="no-product-found-x.png" alt="Image" />

          </div>
      </div>
    );
  }

  let homePageLink = (
    <span className="homePagelink">
      <a href="/">
        <span className="ion-md-home icon-medium"> </span>
      </a>
    </span>
  );

  let CareerPathRender = (
    <div>
      <div className="row subHeadingContainer">
        <h2>
          {category}{" "}
        </h2>

        {homePageLink}
      </div>
    </div>
  );

  let careeritemDisplay = careerDet.map((indicareer, index) => (
    <div className="section-plans" key={indicareer._id}>
      <div className="row">
        <div className="col col-width-1"></div>
        <div className="col col-width-2">
          <div className="plan-box">
            <div>
              <ul className="iconDisplay">
                <li>
                  <p className="plan-price">{indicareer.shortDescription}</p>
                </li>
                <li
                  className="customerInter"
                  onClick={(e) => tempUpdateClick(indicareer._id, index)}
                >
                  <button className="btn">
                 
                    <span>
                      Click Like
                    </span>
                  </button>

                </li>
              </ul>
              <p className="plan-price-meal">{indicareer.learningDetails}</p>
            </div>
            <div className="historyDet">
              <ul className="iconDisplay">
                <li>
                  <i className="ion-ios-calendar icon-small"></i>
                  {indicareer.dateEntered} Shared Date
                </li>
                <li>
                  <i className="ion-ios-cash icon-small"></i>
                  {indicareer.salaryDetail} Lakhs Salary Annum
                </li>
                <li>
                  <i className="ion-ios-heart icon-small"></i>
                  {indicareer.noOfLikes} Likes
                </li>
                <li>
                  <i className="ion-ios-time icon-small"></i>
                  {indicareer.experience} Years Of Experience
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col col-width-3"></div>
      </div>
    </div>
  ));


return props.currentUser ? (
  <div>
    <br></br>
    <div>
      {CareerPathRender}
      {careeritemDisplay}
      {noContent}
    </div>
  </div>

  
) : (
  <h1>You are NOT signed in</h1>
);
};


career.getInitialProps = async context => {
  console.log('Edit Page!');
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');
  console.log('data:' + data.currentUser);

  return data;
};

export default career;