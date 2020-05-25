import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
            <div>
                <h5>Home</h5>
                <li><Link to={'/notice'}>Notice</Link></li>
                <li><Link to={`/setaddress`}>Address Setting</Link></li>
            </div>
    );
}

export default Home;
