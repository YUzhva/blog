import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <p>
    /about path.
    <Link to={`${process.env.PUBLIC_URL}/`}>Go back to Home</Link>
  </p>
);

export default About;
