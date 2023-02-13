import React from 'react';
import { Container, Row, Col, Button, ThemeProvider} from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
//import { resumeHeader } from './data/resumeData'
import { resumeExperience } from './data/resumeData';
import './Resume2.css';

// ***** PAGE STYLES *****
const styles = {
    summary: {
        backgroundColor: '#565656',
        color: 'white',
        paddingLeft:0,
        paddingRight:0,
        paddingBottom:'0.5rem',
    },
    summarySection: {
        backgroundColor:'#454545',
        fontSize: '1.5rem',
        padding:'0.25rem',
        paddingLeft: '1rem',
        marginTop: '1rem',
        textShadow: '1px 1px 0 #fff, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #fff;',
    },
    summarySection2: {
        fontSize: '1rem',
        paddingLeft: '1rem',
        marginTop: '1rem',
        marginBottom: '0rem',
        paddingBottom: 0,
        textAlign:'center',
        textShadow: '1px 1px 0 #fff, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #fff;',
    },
    summarySection3: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        padding:'0.25rem',
        textAlign:'center',
        marginTop: '0rem',
        paddingTop: 0,
        textShadow: '1px 1px 0 #fff, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #fff;',
    },
    experience: {
        backgroundColor: '#d7ced7',
        color: 'black',
        height: '100%'
      },
    expTitle: {
        textAlign: 'center',
        marginTop:'.5rem',
        padding:'.25rem',
        fontSize:'2rem',
        color: 'black',
        fontWeight: 'bold',
        background: "linear-gradient(0deg, #c09f80, #a6525f .5rem)",
        borderTopLeftRadius: '.5rem', 
        borderTopRightRadius: '.5rem', 
        border:'1rem',
        textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
    }, 
    expJobItem: {
        backgroundColor: '#76323f', 
        background: "linear-gradient(180deg, #c09f80, #d7ced7 5rem)",
        borderLeft: '5px solid #c09f80',
        fontSize: '1em',
        marginBottom: '.5rem',
        paddingLeft: '0.5rem',
    },
    expJobItemHead: {
        fontSize: '1.1em',
        textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
    },
    expTag: {
        borderColor: "black", 
        marginRight:'.25rem',  
        paddingLeft: '.2rem',
        paddingRight: '.2rem',
        fontSize:'0.9rem',
        background: "linear-gradient(0deg, #aaa, #d7ced7 1.25rem)",
        border: '1px solid #565656',
        borderRadius: '.5rem', 
    },

  };


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
                        {name}
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
                        <Col xs={12} sm={3} style={styles.summary}>
                            <div style={{textAlign: 'center', fontSize:'2rem'}}>Richard Fleischman</div>
                            <div style={{textAlign: 'center', fontSize:'1.2rem'}}>Full Stack Programmer</div>

                            <div style={styles.summarySection}>Personal Info</div>
                            <div style={styles.summarySection2}>Phone</div>
                            <div style={styles.summarySection3}>414-275-0161</div>
                            <div style={styles.summarySection2}>Email</div>
                            <div style={styles.summarySection3}>rickf71@gmail.com</div>
                            <div style={styles.summarySection2}>External Links</div>
                            <Button className="d-grid gap-2" size="sm" href='https://www.linkedin.com/in/rickfleischman/'>https://www.linkedin.com/in/rickfleischman/</Button>
                            <Button className="d-grid gap-2"  size="sm" href='https://rickf71.github.io/'>https://rickf71.github.io/</Button>


                            <div style={styles.summarySection}>Specific Skills</div>
                            

                        </Col>
                        <Col xs={12} sm={9} style={styles.experience}>
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