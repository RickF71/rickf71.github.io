import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SkillCard from './Component/SkillCard';
import DisGatewayCard from './DisGatewayCard';
import ReactShort from './data/react-short2.png';
import RickNoBG from './images/rick-no-glasses-no-bg-sm.png';

import ReactLogo from './images/react-logo-1.png';
import JavaLogo from './images/java-logo-1.png';
import PHPLogo from './images/php-logo-1.png';
import JSLogo from './images/logo-javascript-transparent.png';
import FigmaLogo from './images/figma-logo-1.png';
import PostmanLogo from './images/postman-logo-1.png';
import JiraLogo from './images/png-jira-1.png';
import InkscapeLogo from './images/inkscape-logo-1.png';
import AudacityLogo from './images/audacity-logo-1.jpg';
import GimpLogo from './images/gimp-logo-1.png';

import NodeJSLogo from './images/logo-nodejs.svg';

export const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return (
      <Container className="josefin-sans no-gutters">

        <Row className="no-gutters" 
              style={{fontSize: '14pt', paddingLeft: '2em', 
                  backgroundColor:'#ECD7C4', 
                  border: '1px solid black',
                  borderRadius: '12px',
                  margin:'0em'}}>
            <div style={{fontSize: '24pt', paddingBottom: '.5em', paddingTop:'.5em', letterSpacing:'-0.08em', lineHeight:'1em'}}>
            Full-stack software programmer with 10+ years of experience in building and maintaining web applications.
          </div>
              <ul style={{paddingLeft: '2em'}}>
                <li>Full-stack development skills in HTML, CSS, JavaScript, React, PHP, MySQL, and SQL Server.</li>
                <li>Experience in designing and implementing scalable and secure web applications.</li>
              </ul>
            </Row>
            <SkillCard skill={{
                  title:"React",
                  logoSrc:ReactLogo,
                  description:"A popular JavaScript library for building user interfaces, I have used React as a front end interface library for several projects." ,
                  extraInfo:"",
                }} />
            <SkillCard skill={{
                  title:"Java",
                  logoSrc:JavaLogo,
                  description:"Java is well established and is widely used in Enterprise Computer Programming. I have experience on a team using Java to create microservice back end for a React front end. Utilized Spring Boot and intefaced with a DyanmoDB database." ,
                  extraInfo:"",
                }} />
            <SkillCard skill={{
                  title:"PHP",
                  logoSrc:PHPLogo,
                  description:"PHP was my first web scripting language. I had a experience with Microsoft ASP before that, and PHP is where I initially developed my Web Programming skills." ,
                  extraInfo:"",
                }} />
            <Row><Col sm={12} className="d-flex justify-content-center"><hr style={{width: '100%', color: '#FFB84E', borderWidth: '2px'}} /></Col></Row>
            <SkillCard skill={{
                  title:"JavaScript",
                  logoSrc:JSLogo,
                  description:"JavaScript is the programming language of the web. I have used JavaScript to create interactive web pages and web applications." ,
                  extraInfo:"",
                }} />
            <SkillCard skill={{
                  title:"Node.js",
                  logoSrc:NodeJSLogo,
                  description:"Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. I have used Node.js to build scalable network applications." ,
                  extraInfo:"",
                }} />
            <SkillCard skill={{
                  title:"Figma",
                  logoSrc:FigmaLogo,
                  description:"Figma is a collaborative design platform that allows users to create, share, and test designs for websites, apps, and other digital products and experiences." ,
                  extraInfo:"",
                }} />
            <SkillCard skill={{
                  title:"Postman",
                  logoSrc:PostmanLogo,
                  description:"Postman is an API platform for building and using APIs. I've used it to test backend APIs." ,
                  extraInfo:"",
                }} />
            <SkillCard skill={{
                  title:"Jira",
                  logoSrc:JiraLogo,
                  description:"Jira is a popular issue tracking software that helps teams to manage their work and track their progress." ,
                  extraInfo:"",
                }} />
            <SkillCard skill={{
                  title:"Inkscape",
                  logoSrc:InkscapeLogo,
                  description:"Inkscape is a free and open-source vector graphics editor that can be used to create and edit scalable vector graphics (SVGs)." ,
                  extraInfo:"",
                }} />
            <SkillCard skill={{
                  title:"Audacity",
                  logoSrc:AudacityLogo,
                  description:"Audacity is a free and open-source audio editing software that can be used to record, edit, and mix audio." ,
                  extraInfo:"",
                }} />
            <SkillCard skill={{
                  title:"Gimp",
                  logoSrc:GimpLogo,
                  description:"GIMP is a free and open-source raster graphics editor that can be used to create and edit digital images." ,
                  extraInfo:"",
                }} />
      </Container>
    )
};
  
// export default Resume;