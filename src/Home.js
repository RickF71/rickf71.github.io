import React from 'react'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReactShort from './data/react-short2.png'
import RickNoBG from './images/rick-no-glasses-no-bg.jpg'

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
              style={{border: '4px solid #9AB4AD', 
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
            <h1>React</h1>
            <hr style={{width: '50%', color: '#9AB4AD'}} />
            <h1>Java</h1>
            <hr style={{width: '50%', color: '#9AB4AD'}} />
            <h1>PHP</h1>
          </Col>
        </Row>
      </Container>
    )
};
  
// export default Resume;