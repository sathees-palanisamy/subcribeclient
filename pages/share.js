import buildClient from '../api/build-client';
import { useState , useEffect, useContext} from 'react';
import axios from 'axios';
import { useRouter } from "next/router";

const SharePage = (props) => {
  const router = useRouter();


  const[jobTitle,setJobTitle] = useState('');
  const[customerDescription,setCustomerDescription] = useState('');
  const[category,setCategory] = useState('Information Technology');
  const[salary,setSalary] = useState(0);
  const[subCategory,setSubCategory] = useState('Others');
  const[experience,setExperience]  = useState(0);
  const[subCategoryArray,setSubCategoryArray] = useState([]);
  const[curError,setCurError] = useState('');

  const dataReducer = [
        { title: 'Information Technology', skills: [ "Others",
            "Big Data Analytics",
            "Block Chain",
            "Cloud",
            "Data Science",
            "Databases",
            "Desktop Application",
            "Embedded Systems",
            "Enterprise Application",
            "Game Development",
            "Microservices",
            "Mobiles Apps",
            "Quality Assurance",
            "Tools",
            "Website",
          ] },
{ title: 'Textile', skills: [ "Others",
        "Apparel",
        "Chemical Processing",
        "Draping and Pattern Making",
        "Dyeing",
        "Fashion Technology",
        "Garment Export Merchandising",
        "Interiors Design",
        "Knitwear Design",
        "Man Made Fibre Technology",
        "Mechanical Processing",
        "Quality Control & Testing",
        "Spinning",
        "Weaving",
        "Textile Engineering",
        "Textile Management",
        "Textile Production",
       ] },
{ title: 'Automobile', skills: [ "Others",
        "Automation and Robotics",
        "Automobile Engineering",
        "Four wheeler Jobs",
        "Logistics and Supply Chain",
        "Mechanical Automobile",
        "Quality Control & Testing",
        "Transportation",
        "Two wheeler Jobs",
      ] },
{ title: 'Medical Science', skills: ["Others",
            "Ayurveda",
            "Biomedical",
            "Dentistry",
            "General Medicine",
            "Surgery",
            "Genetic Engineering",
            "Homeopathy",
            "Hospital Management",
            "Medical Electronics",
            "Nursing",
            "Occupational Therapy",
            "Pharmaceutical",
            "Physiotherapy",
          ] },
{ title: 'Marine', skills: [ "Others",
            "Bridge Manoeuvring",
            "Cadet",
            "Engine Control",
            "Hydraulics",
            "Instrumentation & Process Control",
            "Marine Electrical",
            "Naval Architecture & Ocean Engineering",
            "Navigation",
            "Operating Ships",
            "Tanker Cargo",
            "Tester",
          ] },
{ title: 'Business Management', skills: [ "Others",
        "Banking Management",
        "Disaster Management",
        "Entrepreneurship",
        "Finance",
        "Hospitality Management",
        "Human Resource",
        "Insurance",
        "International Business",
        "Marketing",
        "Operation Management",
        "Sales & Marketing",
        "System Management",
      ] },
{ title: "Agriculture & Biology", skills: [  "Others",
        "Agriculture",
        "Food Engineering",
        "Agriculture & Business Management",
        "Applied MicroBiology",
        "Bioinformatics",
        "Botany",
        "Dairy Technology",
        "Food Technology",
        "Forestry Management",
        "Foundry",
        "Irrigation Water Management",
        "Zoology",
      ]},
{ title: 'Electrical & Electronics', skills: [ "Others",
        "Applied Electronics",
        "Control and Instrumentation",
        "Electrical Engineer",
        "Electronics Control Systems",
        "Electronics Engineering",
        "Embedded Systems",
        "High Voltage",
        "Power Electronics and Drives",
        "Power Engineering and Management",
        "Power Systems",
        "Program Logic Controllers",
        "VLSI Design",
       ]},
{ title: 'Chemical', skills: [ "Others",
        "Applied Chemistry",
        "Catalysis Technology",
        "Chemical Engineering",
        "Crystal Science",
        "Leather Technology",
        "Paint Technology",
        "Petrochemical",
        "Polymer",
        "Rubber",
        "Plastic",
      ]},
{ title: 'Communication', skills: [ "Others",
        "Communication Systems",
        "Networking",
        "Sensor Systems",
        "Telecommunication",
        "Wireless Technologies",
      ]},
{ title: 'Civil', skills: [ "Others",
            "Soil Mechanics and Foundation",
            "Applied Geology",
            "Ceramic Engineering",
            "Civil Engineering",
            "Coastal Management",
            "Construction Engineering & Management",
            "Environmental & Management",
            "Geo Informatics",
            "Hydrology & Water Resources",
            "Interior Design",
            "Remote Sensing and Geomatics",
            "Structural",
            "Transportation",
          ]},
{ title: 'Mech & Manufacturing', skills: [ "Others",
        "Green Manufacturing",
        "CAD/CAM",
        "Computer Integrated Manufacturing",
        "Energy Engineering",
        "Energy Management",
        "Hydraulics & Water Res",
        "Industrial Design",
        "Manufacturing Management",
        "Materials Science",
        "Mechanical Engineering",
        "Mechanics",
        "Mechatronics",
        "Mining",
        "Offshore Structures",
        "Printing & Packaging",
        "Product Design & Development",
        "Production & Industrial Engineering",
        "Quality Management",
        "Solar Energy",
        "Solid Fluid Mechanics",
        "Thermal Engineering",
      ]},
{ title: 'Entertainment', skills: [ "Others",
        "Animation and Design",
        "Animation Film Making",
        "Electronic Media",
        "Film Making",
        "Game Art and Design",
        "Graphic Designing",
        "Journalism",
        "Media Management",
        "Multimedia",
        "Visual Communication",
        "Visual Effects",
      ]},
{ title: 'Aerospace', skills: [ "Others",
        "Aeronautical Engineering",
        "Air Traffic Control",
        "AirCraft Manufacturing and Maintenance",
        "Airport Management",
        "Aviation Management",
        "Avionics and Systems",
        "Cabin Crew",
        "Fight Simulation",
        "Helicopters",
        "Pilot",
        "Propulsion",
        "Supply Chain",
      ] },
      { title: 'Physics', skills: [ "Others",
        "Physics Teaching",
        "Medical Physics",
        "Nanotechnology",
        "Nuclear Engineering",
        "Photonics",
      ]},
      { title: 'Maths', skills: [ "Others",
        "Maths Teaching",
        "Industrial Mathematics",
        "Scientific Computing",
        "Applied Mathematics",
        "Business Statistics",
        "Computational Statistics",
        "Maths and Computing Engineering",
      ]},
      { title: 'Arts and Hotel', skills: [ "Others",
        "Catering",
        "Hotel Management",
        "Tourism Management",
        "Commerce",
        "Economics",
        "Earth and Atmospheric",
        "Language Specific",
        "English",
        "Finance",
        "Fine and Performing Arts",
        "History",
        "Law",
        "Physical Education and Sports",
        "Political Science",
      ]},

        ]



  const categoryChange = (event) => {

      setCategory(event.target.value);

  }


  const handleSubmit = (event) => {

      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      let current_datetime= new Date();
      let formatted_date = current_datetime.getDate() + "-" + months[current_datetime.getMonth()] + "-" + current_datetime.getFullYear();


      let DateNum = new Date().getTime();

      const data = {
          shortDescription: jobTitle,
          mainCategory: category,
          subCategory: subCategory,
          learningDetails: customerDescription,
          noOfLikes: 0,
          salaryDetail: salary,
          dateEntered: formatted_date,
          created: DateNum,
          updated: DateNum,
          experience: experience
      };
      console.log("jobTitle:" + jobTitle);
      console.log("category:" + category);
      console.log("subCategory:" + subCategory);
      console.log("customerDescription:" + customerDescription);
      console.log("salary:" + salary);
      console.log("formatted_date,:" + formatted_date);
      console.log("DateNum:" + DateNum);
      console.log("experience:" + experience);

      console.log("data:" + data);

    //  props.InsertCareerExec(data);

    axios
    .post("/api/insert", {
        newCareer: data,
    })
    .then((response) => {
        if (response.status == 200) {
            setCurError('Your Career added successfully');
        } else {
            setCurError('Insert Error');
        }
    })
    .catch((error) => {
      console.log(error);
      setCurError('Insert Error');
    });

      event.preventDefault();

  }

  let curSkills = [];


  dataReducer.map((curCategory) => {
       if (curCategory.title === category) {
           curSkills = [...curCategory.skills]
       }
   }) 

  let subCategoryList = curSkills.map(suCategories1 =>
      <option value={suCategories1} key={suCategories1}>{suCategories1}</option>
  );

  let homePageLink = <span className="homePagelink">
  <a href="/"><span className="ion-md-home icon-medium"> </span></a>   
  </span>

  return(
      <section className="sharepath" id="sharepath">
    
      <div className="section-form">
          <div className="row subHeadingContainer">
         
              <h2>Share Your Career Path</h2>
              {homePageLink}
          
          </div>
        <form onSubmit={handleSubmit}>
              <div className="row">
                  <div className="contact-form">
                      <div className="row">
                          <div className="col span-1-of-3">
                              <label>Short description about your path</label>
                          </div>
                          <div className="col span-2-of-3">
                              <input type="text" name="jobTitle" id="jobTitle" placeholder="Your path" required onChange={event => setJobTitle(event.target.value)} value={jobTitle} />
                          </div>
                      </div>

                      <div className="row">
                          <div className="col span-1-of-3">
                              <label>Main Category</label>
                          </div>
                          <div className="col span-2-of-3 classic" >
                              <select value={category} onChange={categoryChange}>
                                  <option value="Information Technology">Information Technology</option>
                                  <option value="Textile">Textile</option>
                                  <option value="Automobile">Automobile</option>
                                  <option value="Medical Science">Medical Science</option>
                                  <option value="Marine">Marine</option>
                                  <option value="Business Management">Business Management</option>
                                  <option value="Agriculture & Biology">Agriculture & Biology</option>
                                  <option value="Electrical & Electronics">Electrical & Electronics</option>
                                  <option value="Chemical">Chemical</option>
                                  <option value="Communication">Communication</option>
                                  <option value="Civil">Civil</option>
                                  <option value="Mech & Manufacturing">Mech & Manufacturing</option>   
                                  <option value="Entertainment">Entertainment</option>  
                                  <option value="Aerospace">Aerospace</option>                                                                                                                                                                 
                                  <option value="Physics">Physics</option>
                                  <option value="Maths">Maths</option>
                                  <option value="Arts and Hotel">Arts and Hotel</option>
                              </select>
                          </div>
                      </div>

                      <div className="row">
                          <div className="col span-1-of-3">
                              <label>Sub Category</label>
                          </div>
                          <div className="col span-2-of-3 classic">
                              <select value={subCategory} onChange={event => setSubCategory(event.target.value)}>
                              {subCategoryList}
                              </select>
                          </div>
                      </div>


                      <div className="row">
                          <div className="col span-1-of-3">
                              <label>Salary per Annum (lakhs)</label>
                          </div>
                          <div className="col span-2-of-3">
                              <input type="number" name="salary" id="salary" placeholder="Salary in lakhs" required onChange={event => setSalary(event.target.value)} value={salary} />
                          </div>
                      </div>

                      <div className="row">
                          <div className="col span-1-of-3">
                              <label>Experience in years</label>
                          </div>
                          <div className="col span-2-of-3">
                              <input type="number" name="experience" id="experience" placeholder="Years of Experience" required onChange={event => setExperience(event.target.value)} value={experience} />
                          </div>
                      </div>

                      <div className="row">
                          <div className="col span-1-of-3">
                              <label>What and Where to learn?</label>
                          </div>
                          <div className="col span-2-of-3">
                              <textarea className="message" placeholder="learning details" onChange={event => setCustomerDescription(event.target.value)} required value={customerDescription} ></textarea>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col span-1-of-3">
                              <label>&nbsp;</label>
                          </div>
                          <div className="col span-2-of-3">
                              <input type="submit" value="Send it!"></input>
                          </div>
                      </div>

                  </div>

              </div>
          </form>
          <br></br>
          <div className="emailAdd">
              {curError}
            </div>
      </div>
     
  </section>

  );


};

export default SharePage;

