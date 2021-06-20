import React, { Component, useState } from 'react';
import axios from 'axios';

const SuggestionPage = (props) => {

    const[dataList,setdataList]=  useState([]);
    const[email,setEmail]=  useState('');
    const[customerDescription,setCustomerDescription]=  useState('');
    const[uploadStatus,setUploadStatus]=  useState('');
    const[uiStatus,setUiStatus]=  useState('');

   const emailChange = (event) => {
       setEmail(event.target.value);
   }

   const DeleteClick = (id,e) => {

        const data = {
            id: id,
            email: "",
            detail: "",
            date: "",
        };

        const newToken = localStorage.getItem('token');


        axios.post('/api/feedback/delete', data,
        {  
            headers: {Authorization: `Bearer ${newToken}`} }
        )
            .then(response => {
                displayList();
            })
            .catch((error) => {
                console.log(error)
            });
   
    }


    const descriptionChange = (event) => {
        setCustomerDescription(event.target.value);
    }

    const displayList = (event) => {
        setUiStatus('list');

        const newToken = localStorage.getItem('token');


        axios.get('/api/feedback/list', { headers: {Authorization: `Bearer ${newToken}`}})
        .then(response => {
            setdataList([...response.data]);
        })
        .catch((error) => {
            console.log(error)
        });
    }


   const handleSubmit = (event) => {
    
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let current_datetime = new Date();

        let formatted_date = current_datetime.getDate() + "-" + months[current_datetime.getMonth()] + "-" + current_datetime.getFullYear();

        const data = {
            id : "",
            email: email,
            detail: customerDescription,
            date: formatted_date,
        };

        const newToken = localStorage.getItem('token');

        axios.post('/api/feedback/create', data, {  
            headers: {Authorization: `Bearer ${newToken}`}
        })
            .then(response => {
       
                console.log('response.status:',response.status);
                if (response.status === 200) {
                    setUploadStatus('Thank you for helping us.' );
                } else {
                    setUploadStatus('Server Error');
                }

            })
            .catch((error) => {
                console.log(error)
                setUploadStatus('Server Error');
            });

        setEmail('');
        setCustomerDescription('');
        event.preventDefault();
    }


        let homePageLink = <span className="homePagelink">
            <a href="/"><span className="ion-md-home icon-medium"> </span></a>
        </span>

        let renderList;

        if (uiStatus === '') {

            renderList = <div className="section-form">
                <div className="row subHeadingContainer">

                    <h2>Suggestion Form</h2>


                    {homePageLink}
        

                </div>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="contact-form">


                            <div className="row">
                                <div className="col span-1-of-3">
                                    <label>Email ID</label>
                                </div>
                                <div className="col span-2-of-3">
                                    <input type="text" name="email" id="email" placeholder="Your Email ID" required onChange={emailChange} value={email} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col span-1-of-3">
                                    <label>Suggestion Details</label>
                                </div>
                                <div className="col span-2-of-3">
                                    <textarea className="message" placeholder="details" onChange={descriptionChange} required value={customerDescription} ></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col span-1-of-3">
                                    <label>&nbsp;</label>
                                </div>
                                <div className="col span-2-of-3">
                                    <input type="submit" value="Log it!"></input>
                                </div>
                            </div>

                        </div>

                    </div>
                </form>
                <br></br>
                <div className="emailAdd">
                    <p>{uploadStatus}</p>
                </div>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col span-1-of-3">
                        <label>&nbsp;</label>
                    </div>
                    <div className="col span-2-of-3">
                        <input type="button" value="List of Suggestions" onClick={displayList}></input>
                    </div>
                </div>
            </div>

        }

        let suggestionListPage;

        if (uiStatus === 'list') {

            suggestionListPage = dataList.map(indiSuggestion =>
                <div className="section-plans" key={indiSuggestion.id}>
                    <div className="row" >
                        <div className="col col-width-1">
                        </div>
                        <div className="col col-width-2">
                            <div className="plan-box">
                                <div>
                                    <ul className="iconDisplay">
                                        <li><p className="plan-price">{indiSuggestion.email}</p></li>
                                        <li className="customerInter" onClick={(e) => DeleteClick(indiSuggestion.id, e)}
                                        ><i className="ion-ios-crop icon-small"></i>Delete</li>
                                    </ul>
                                    <p className="plan-price-meal">{indiSuggestion.detail}</p>
                                </div>
                                <div className="historyDet">
                                    <ul className="iconDisplay">
                                        <li><i className="ion-ios-calendar icon-small"></i>{indiSuggestion.date} Shared Date</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-width-3">
                        </div>
                    </div>
                 <br></br>
                 <br></br>
                </div>
            );


            renderList = <div className="section-form">
                <div className="row subHeadingContainer">

                    <h2>Suggestion List</h2>


                    {homePageLink}
                  

                </div>

                {suggestionListPage}
                </div>

        }

        return (
            <section>
    
                {renderList}

            </section>

        );
};


export default SuggestionPage;
