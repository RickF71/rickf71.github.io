import React from 'react'
import { Container, Row, Col, Button, ThemeProvider} from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
//import { resumeHeader } from './data/resumeData'
import { resumeExperience } from './data/resumeData'
import { styles } from './ResumeStyles'
import './Resume2.css'

function Exp({ exp }) {
    return (
        <div style={styles.expJobItem}>
            <Container>
                <Row style={styles.expJobItemHead}>
                    <Col xs={4} style={{textAlign: 'left',}}>{exp.title} </Col>
                    <Col xs={4} style={{textAlign: 'center',}}>{exp.company}</Col>
                    {exp.startDate &&  (
                        <Col xs={4} style={{textAlign: 'right',}}>{exp.startDate} - {exp.endDate} </Col>
                    )}
                </Row>
            </Container>

            <div>{exp.summary}</div>
          
            <div>
              {exp.expTags && (
                exp.expTags.map((name, key) => (
                    <span key={key} bg='secondary' style={styles.expTag}>
                        {name + ' '}
                    </span>
                )))}
            </div> 

            <ListGroup style={{ paddingTop: '.5rem'}}>
            {exp.experience.map((expItem) => (
                <ListGroup.Item as="li" style={{ padding: "0.0rem 0.2rem", marginLeft: "0.25rem" }}>{expItem.description}</ListGroup.Item>
            ))}
            </ListGroup>
        </div>
    );
}


export const Resume2 = () => {
    return (
        <>
            { true && (
            // <ThemeProvider>
                <Container fluid className='resume' style={{marginRight: 0, marginLeft:0, width: '100%'}}>
                    <Row style={{}}>
                        <Col sm={12} md={3} style={styles.summary}>
                            <div style={{textAlign: 'center', fontSize:'2rem'}}>Richard Fleischman</div>
                            <div style={{textAlign: 'center', fontSize:'1.2rem'}}>Full Stack Programmer</div>

                            <div style={styles.summarySection}>Personal Info</div>
                            <div style={styles.summarySection2}>Phone</div>
                            <div style={styles.summarySection3}>414-275-0161</div>
                            <div style={styles.summarySection2}>Email</div>
                            <div style={styles.summarySection3}>rickf71@gmail.com</div>
                            <div style={styles.summarySection2}>External Links</div>
                            <Button className="d-grid" style={{marginBottom: '.2rem'}} variant="outline-warning" size="sm" href='https://www.linkedin.com/in/rickfleischman/'>https://www.linkedin.com/in/rickfleischman/</Button>
                            <Button className="d-grid" variant="outline-warning" size="sm" href='https://rickf71.github.io/'>https://rickf71.github.io/</Button>


                            <div style={styles.summarySection}>Specific Skills</div>
                            

                        </Col>
                        <Col sm={12} md={9} style={styles.experience}>
                            <div style={styles.expTitle}>Skill Overview</div>

                            <div style={styles.expJobItem}>
                                <div style={styles.expJobItemHead}>Front End</div>
                                <div style={{paddingLeft: '.5rem'}}>HTML, CSS, Javascript, React, jQuery, Bootstrap</div>

                                <div style={styles.expJobItemHead}>Programming</div>
                                <div style={{paddingLeft: '.5rem'}}>PHP, Javascript, ASP, Ruby On Rails, C++, C, Python, Authentication, Troubleshooting, Creating Documentation</div>
                                
                                <div style={styles.expJobItemHead}>Database</div>
                                <div style={{paddingLeft: '.5rem'}}>MySQL, SQL Server, Microsoft Access, IBM DB2 (other SQL based DBs)</div>

                                <div style={styles.expJobItemHead}>Back End</div>
                                <div style={{paddingLeft: '.5rem'}}>Apache, Windows Server, LAMP, VMWare, Unix/Linux, OSs in general</div>
                            </div>

                            <div style={styles.expTitle}>Experience</div>
                            {resumeExperience.map((exp) => (    
                                <Exp exp={exp} />
                            ))}
                            
                        </Col>
                    </Row>
                </Container>
            // </ThemeProvider>
            )}
        </>
    )
};
  
// export default Resume;