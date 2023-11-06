import React from 'react'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReactShort from './data/react-short2.png'
import RickNoBG from './images/rick-no-glasses-no-bg-sm.png'

import ReactLogo from './images/react-logo-1.png'
import JavaLogo from './images/java-logo-1.png'
import PHPLogo from './images/php-logo-1.png'
import JSLogo from './images/logo-javascript-transparent.png'
import FigmaLogo from './images/figma-logo-1.png'
import PostmanLogo from './images/postman-logo-1.png'
import JiraLogo from './images/png-jira-1.png'
import InkscapeLogo from './images/inkscape-logo-1.png'
import AudacityLogo from './images/audacity-logo-1.jpg'
import GimpLogo from './images/gimp-logo-1.png'

import NodeJSLogo from './images/logo-nodejs.svg'

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
              sm={4} 
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
          <Col sm={8} flex={1} style={{paddingLeft:'3em', }}>
            <Row className="d-flex align-items-center">
              <Col sm={4}><img src={ReactLogo} alt="React Logo" style={{width: '100%', height: 'auto'}} /></Col>
              <Col sm={8}>
                <div style={{fontSize: '3rem'}}>React</div>
                <div style={{fontSize: '1.5rem', lineHeight: '1.6rem', paddingBottom: '1rem'}}>A popular JavaScript library for building user interfaces, I have used React as a front end interface library for several projects.</div>
              </Col>
            </Row>
            <Row>
                  <Col sm={1}></Col>
                  <Col><img src={JSLogo} alt="React Logo" style={{height: '8rem'}} /></Col>
                  <Col><img src={NodeJSLogo} alt="React Logo" style={{height: '8rem'}} /></Col>
            </Row>
            <Row><Col sm={12} className="d-flex justify-content-center"><hr style={{width: '50%', color: '#FFB84E', borderWidth: '2px'}} /></Col></Row>
            <Row className="d-flex align-items-center">
              <Col sm={4}><img src={JavaLogo} alt="Java Logo" style={{width: '100%', height: 'auto'}} /></Col>
              <Col sm={8}>
                <div style={{fontSize: '3rem'}}>Java</div>
                <div style={{fontSize: '1.5rem', lineHeight: '1.6rem'}}>
                  <div>Java is well established and is widely used in Enterprise Computer Programming.</div>
                  <div>I have experience on a team using Java to create microservice back end for a React front end. Utilized Spring Boot and intefaced with a DyanmoDB database.</div>
                </div>
              </Col>
            </Row>
            <Row><Col sm={12} className="d-flex justify-content-center"><hr style={{width: '50%', color: '#FFB84E', borderWidth: '2px'}} /></Col></Row>
            <Row className="d-flex align-items-center">
              <Col sm={4}><img src={PHPLogo} alt="PHP Logo" style={{width: '100%', height: 'auto'}} /></Col>
              <Col sm={8}>
                <div style={{fontSize: '3rem'}}>PHP</div>
                <div style={{fontSize: '1.5rem', lineHeight: '1.6rem'}}>
                  <div>PHP was my first web scripting language.  I had a bit of experience with Microsoft ASP before that, but PHP is where I initially developed my Web Programming skills.</div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row><Col sm={12} className="d-flex justify-content-center"><hr style={{width: '50%', color: '#FFB84E', borderWidth: '5px'}} /></Col></Row>

        <Row>
          <Col sm={4} style={{textAlign:'center'}}>
            <h1>Figma</h1>
            <img src={FigmaLogo} alt="Figma Logo" style={{width: '50%', height: 'auto'}} />
            <div>Figma is a collaborative design platform that allows users to create, share, and test designs for websites, apps, and other digital products and experiences.</div>
            <br />
            <div>Figma is used by designers, product managers, and developers of all kinds to create wireframes, mockups, prototypes, and final designs. </div>
          </Col>
          <Col sm={4} style={{textAlign:'center'}}> 
            <h1>Postman</h1>
            <img src={PostmanLogo} alt="Postman Logo" style={{width: '50%', height: 'auto'}} />
            <div>Postman is an API platform for building and using APIs. I've used it to test backend APIs.</div>
            <br />
            <div>Used by developers, QA engineers, and product managers to design, test, document, and monitor APIs.</div>
          </Col>
          <Col sm={4} style={{textAlign:'center'}}> 
            <h1>Jira</h1>
            <img src={JiraLogo} alt="Jira Logo" style={{width: '50%', height: 'auto'}} />
            <div>Jira is a popular issue tracking software that helps teams to manage their work and track their progress.</div>
            <br />
            <div>Used by software development teams, IT teams, and other teams to track bugs, tasks, and other work items.</div>
          </Col>
        </Row>
        <Row><Col sm={12} className="d-flex justify-content-center"><hr style={{width: '50%', color: '#FFB84E', borderWidth: '2px'}} /></Col></Row>
        <Row>
        <Col sm={4} style={{textAlign:'center'}}> 
            <h1>Inkscape</h1>
            <img src={InkscapeLogo} alt="Inkscape Logo" style={{width: '50%', height: 'auto'}} />
            <div>Inkscape is a free and open-source vector graphics editor that can be used to create and edit scalable vector graphics (SVGs).</div>
            <br />
            <div>Used by graphic designers, web designers, and illustrators to create logos, illustrations, icons, and other vector graphics.</div>
          </Col>
          <Col sm={4} style={{textAlign:'center'}}> 
            <h1>Audacity</h1>
            <img src={AudacityLogo} alt="Audacity Logo" style={{width: '50%', height: 'auto'}} />
            <div>Audacity is a free and open-source audio editing software that can be used to record, edit, and mix audio.</div>
            <br />
            <div>Used by musicians, podcasters, and audio engineers to record, edit, and mix music, podcasts, and other audio content.</div>
          </Col>
          <Col sm={4} style={{textAlign:'center'}}> 
            <h1>Gimp</h1>
            <img src={GimpLogo} alt="Gimp Logo" style={{width: '50%', height: 'auto'}} />
            <div>GIMP is a free and open-source raster graphics editor that can be used to create and edit digital images.</div>
            <br />
            <div>Used by photographers, graphic designers, and digital artists to create and edit photos, illustrations, and other digital images.similar in function to Photoshop.</div>
          </Col>
          
        </Row>
        <Row><Col sm={12} className="d-flex justify-content-center"><hr style={{width: '50%', color: '#FFB84E', borderWidth: '2px'}} /></Col></Row>

      </Container>
    )
};
  
// export default Resume;