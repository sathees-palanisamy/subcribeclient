import buildClient from '../api/build-client';
import { useState , useEffect, useContext} from 'react';
import axios from 'axios';
import { useRouter } from "next/router";


const LandingPage = ({ currentUser }) => {
  const router = useRouter();

  return (
    <div>
    <div >
    <div className="HomeStyle" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(./Homepic.jpeg)` }}>
        <div className="hero-text-box clearfix">
            <h1>Share Your Career Path</h1>
            <p>Guide our Junior's to pursue a career that is meaningful and fulfilling</p>
            <br></br>
            <a className="btn btn-full" href="/share">Share Your's</a>
            <a className="btn btn-ghost" href="/department">Analyse Other's</a>
        </div>
    </div>

</div>
</div>
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

