import React from 'react'
import { Container, Row, Col, Button, ThemeProvider} from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
//import { resumeHeader } from './data/resumeData'
import { resumeExperience } from './data/resumeData'
// import { styles } from './ResumeStyles'
import './Resume.css'

function Exp({ exp }) {
    return (
        <div className='exp-job-item' style={{paddingBottom: '1em'}}>
            <Container className='exp-job-item-head'>
                <Row>
                    <Col className='d-flex align-items-center' style={{textAlign: 'left', fontSize: '1.4rem'}}>
                        {exp.title} 
                    </Col>
                    <Col className='' >
                        <Row style={{textAlign: 'center',}}>{exp.company}</Row>
                        {exp.startDate &&  (
                            <Row style={{textAlign: 'right',}}>{exp.startDate} - {exp.endDate} </Row>
                        )}
                    </Col>
                </Row>

                <Row style={{fontStyle: 'italic'}}><Col>{exp.summary}</Col></Row>
            

                {exp.expTags && (
                    exp.expTags.map((name, key) => (
                        <span key={key} bg='secondary' className='expTag'>
                            {name + ' '}
                        </span>
                    )))}


                <ListGroup style={{ paddingTop: '.5rem'}}>
                    {exp.experience.map((expItem) => (
                        <ListGroup.Item as="li" style={{ padding: "0.0rem 0.2rem"}}>{expItem.description}</ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        </div>
    );
}


export const Resume = () => {
    return (
        <div className='justify-content-center' style={{}}>
            <Container className='resume d-flex justify-content-center' style={{marginRight: 0, marginLeft:0, width: '100%', }}>
                <Row style={{}}>
                    <Col sm={12} md={4} className='summary'>
                        <Row style={{textAlign: 'center', fontSize:'2rem'}}>Richard Fleischman</Row>
                        <Row style={{textAlign: 'center', fontSize:'1.2rem'}}>Full Stack Programmer</Row>
                        <Row style={{textAlign: 'center', fontSize:'1.2rem'}}>Milwaukee, WI</Row>
                        <div>Phone</div>
                        <div>414-275-0161</div>
                        <div>Email</div>
                        <div>rickf71@gmail.com</div>
                        <div>External Links</div>
                        <Button className="d-grid" variant="primary" size="sm" style={{marginBottom:'.2rem'}} href='https://www.linkedin.com/in/rickfleischman/'>LinkedIn</Button>
                        <Button className="d-grid" variant="primary" size="sm" href='https://rickf71.github.io/'>GitHub</Button>


                        <br /><br />

                        <div style={{fontSize:'1.5rem', fontWeight:'bold'}}>Skill Overview</div>

                        <div>
                            <div>Front End</div>
                            <div style={{paddingLeft: '.5rem'}}>HTML, CSS, Javascript, React, jQuery, Bootstrap</div>

                            <div className='exp-job-item-head'>Programming</div>
                            <div style={{paddingLeft: '.5rem'}}>PHP, Javascript, ASP, Ruby On Rails, C++, C, Python, Authentication, Troubleshooting, Creating Documentation</div>
                            
                            <div className='exp-job-item-head'>Database</div>
                            <div style={{paddingLeft: '.5rem'}}>MySQL, SQL Server, Microsoft Access, IBM DB2 (other SQL based DBs)</div>

                            <div className='exp-job-item-head'>Back End</div>
                            <div style={{paddingLeft: '.5rem'}}>Apache, Windows Server, LAMP, VMWare, Unix/Linux, OSs in general</div>
                        </div>

                        <div className='exp-title'>Experience</div>
                    </Col>
                    <Col sm={12} md={8}>

                        {resumeExperience.map((exp) => (    
                            <Exp exp={exp} />
                        ))}
                    </Col>

                </Row>

            </Container>
            <Container>
                <Row>
                    <h3>EDUCATION</h3>
                    <p>
                        Milwaukee School Of Engineering (MSOE) - Milwaukee, WI
                        Major:  Computer Engineering.  

                        Oak Creek Senior High School - Oak Creek, WI
                    </p>
                    <h3>KEY SKILLS</h3>
                    <p>My primary skill is working with data, including various database systems.
                    Other skills: the LAMP stack (Linux Apache MySQL PHP) with a special focus on creating user interfaces using jQuery and jQuery-UI.
                    Programming Languages : PHP / Javascript, Java, ASP, C, Visual Basic, Ruby and several others.
                    Databases : MySQL, MS Access, SQL Server, Oracle
                    Other: jQuery, Ruby on Rails, VMWare Virtualization
                    </p>
                    <h3>CONTACT INFORMATION</h3>
                    <div>Email: rickf71@gmail.com</div>
                    <div>Phone: 414-275-0161 | 415-633-6359</div>
                </Row>
            </Container>
        </div>
    )
};
  
// export default Resume;