import React from 'react'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReactShort from './data/react-short2.png'
import RickNoBG from './images/rick-no-glasses-no-bg.jpg'
import ReactLogo from './images/react-logo-1.png'
import JavaLogo from './images/java-logo-1.png'
import PHPLogo from './images/php-logo-1.png'

export const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return (
      <Container className="josefin-sans">
        <Row style={{paddingTop: '1em'}}>
          &nbsp;
        </Row>
        <Row>
          <Col 
              xs={4} 
              style={{border: '4px solid #FFB84E', 
                  borderRadius:'6px', 
                  lineHeight:'2rem', 
                  paddingTop: '1em',
                  }}>
            <Row>
              <div style={{fontSize: '24pt', paddingBottom: '2em', letterSpacing:'-0.08em'}}>
                Full-stack software engineer with 10+ years of experience in building and maintaining web applications.
              </div>
            </Row>
            <Row style={{fontSize: '14pt', paddingLeft: '2em', lineHeight: '1.5rem'}}>
              <ul>
                <li>Full-stack development skills in HTML, CSS, JavaScript, React, PHP, MySQL, and SQL Server.</li>
                <li>Experience in designing and implementing scalable and secure web applications.</li>
                <li>Proven ability to work independently and as part of a team to deliver projects on time and on budget.</li>
              </ul>
            </Row>
            <Row>
              <img src={RickNoBG} alt="Rick Fleischman" style={{width: '100%', height: 'auto'}} />
            </Row>
          </Col>
          <Col xs={8} flex={1} style={{paddingLeft:'3em', }}>
            <Row className="d-flex align-items-center">
              <Col xs={4}><img src={ReactLogo} alt="React Logo" style={{width: '100%', height: 'auto'}} /></Col>
              <Col xs={8}>
                <div style={{fontSize: '3rem'}}>React</div>
                <div style={{fontSize: '1.5rem', lineHeight: '1.6rem'}}>A popular JavaScript libraries for building user interfaces, I have used React as a front end interface library for several projects.</div>
                <Row>
                  <Col>JavaScript</Col>
                  <Col>Node.js</Col>
                </Row>
              </Col>
            </Row>
            <Row><Col xs={12} className="d-flex justify-content-center"><hr style={{width: '50%', color: '#FFB84E', borderWidth: '2px'}} /></Col></Row>
            <Row className="d-flex align-items-center">
              <Col xs={8}>
                <div style={{fontSize: '3rem'}}>Java</div>
                <div style={{fontSize: '1.5rem', lineHeight: '1.6rem'}}>
                  <div>Java is well established and is widely used in Enterprise Computer Programming.</div>
                  <div>I have experience on a team using Java to create microservice back end for a React front end. Utilized Spring Boot and intefaced with a DyanmoDB database.</div>
                </div>
              </Col>
              <Col xs={4}><img src={JavaLogo} alt="Java Logo" style={{width: '100%', height: 'auto'}} /></Col>
            </Row>
            <Row><Col xs={12} className="d-flex justify-content-center"><hr style={{width: '50%', color: '#FFB84E', borderWidth: '2px'}} /></Col></Row>
            <Row className="d-flex align-items-center">
              <Col xs={4}><img src={PHPLogo} alt="PHP Logo" style={{width: '100%', height: 'auto'}} /></Col>
              <Col xs={8}>
                <div style={{fontSize: '3rem'}}>PHP</div>
                <div style={{fontSize: '1.5rem', lineHeight: '1.6rem'}}>
                  <div>PHP was my first web scripting language.  I had a bit of experience with Microsoft ASP before that, but PHP is where I initially developed my Web Programming skills.</div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row><Col xs={12} className="d-flex justify-content-center"><hr style={{width: '50%', color: '#FFB84E', borderWidth: '2px'}} /></Col></Row>
        <Row><Col xs={12} className="d-flex justify-content-center"><hr style={{width: '50%', color: '#FFB84E', borderWidth: '2px'}} /></Col></Row>

      </Container>
    )
};
  
// export default Resume;