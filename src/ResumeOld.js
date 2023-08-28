import React from 'react';
import { Container, Row, Col, Card, Button, ThemeProvider} from 'react-bootstrap';

const theme = {
    primary: '#00b8d4',
    secondary: '#f50057'
  };

export const Resume = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container className='resume'>
                <Row>
                    <h1>Richard Fleischman</h1>

                    <p>
                        <div>Full Stack Programmer</div>
                        <div>Phone: 414-275-0161  ·  Email: rickf71@gmail.com</div>
                        <div>
                            <Button href='https://www.linkedin.com/in/rickfleischman/'>LinkedIn</Button>&nbsp;
                            <Button href='https://rickf71.github.io/'>Github</Button>
                        </div>
                    </p>
                </Row>

                <Row>
                    <Col>
                        <Card className='rounded'>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Header>Front End</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    HTML, CSS, Javascript, React, jQuery, Bootstrap
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Header>Programmer</Card.Header>
                        <Card.Body>
                            {/* <Card.Title>Programmer</Card.Title> */}
                            <Card.Text>
                                PHP, ASP, Ruby On Rails, C++, C, Python
                                Authentication, Troubleshooter, Solid Documentation
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Header>Database</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                MySQL, SQL Server, Microsoft Access, MongoDB, others
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header>Back End</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                Apache, Windows Server, LAMP, VMWare, Unix/Linux
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            &nbsp;
            <Container>
                <Row>
                    <h2>About Richard</h2>

                    <p>
                        Richard is a highly motivated and skilled computer programmer with over 15 years of experience 
                        in web programming. He has a strong track record of success in using PHP and MySQL to develop 
                        and maintain web applications, and is also familiar with HTML5, CSS, Javascript, VB, C, C++, 
                        and Ruby on Rails. In his previous role as a Full Stack Instructor at Ancora Education, Richard 
                        was responsible for training a class of 20 students in CSS, HTML, and Javascript, and was able 
                        to significantly improve their skills and knowledge in these areas. Richard is known for his 
                        excellent code troubleshooting ability and experience with relational databases, which have 
                        helped him to successfully solve complex technical issues and improve the performance of 
                        web-based systems. He is excited to bring his skills and expertise to a new opportunity, and 
                        is confident in his ability to make a positive contribution to any team.

                    </p>

                    <p>Richard enjoys collaborating with others and has a great ability to troubleshoot problems. 
                    It's a great thing for me to hear other people's challenges and work together and fix the issues 
                    that might be causing any problems.</p>

                    <p>
                    <ul>
                        <li>See the flow of code and enjoy troubleshooting.</li>
                        <li>Enjoy working with data, and know databases well.  </li>
                        <li>Partaking in creation of awesome web interfaces.  Welcome working with design artists.</li>
                        <li>My favorite subjects are science, math, and technology. Also love art and movies.</li>
                        <li>Learning Agile programming for years, and recently have been utilizing it more.  
                            I have also utilized Six Sigma and Lean.</li>
                    </ul>
                    </p>

                </Row>
            </Container>
            <hr />
            <Container className='experience'>
                <Row>
                    <Col><h1>Experience</h1></Col>
                </Row>
            </Container>


            <Container>
                <Row>
                    <h4>MARS Returnship · MARS Solutions Group (February - May 2022)</h4>
                </Row>
                <Row>
                    <p>
                        <ul>
                            <li>Instruction on HTML, CSS and Javascript</li>
                            <li>Learning about React, a great front end framework</li>
                            <li>Agile methodology, such as sprints and scrums</li>
                            <li>Microsoft Teams - great for settings up groups and communication</li>
                            <li>Jira - highly valuable tool for organizing projects</li>
                        </ul>
                    </p>

                </Row>
            </Container>

            <Container>
                <Row>
                    <h4>Full Stack Instructor · Ancora Education (August - October 2019)</h4>
                </Row>
                <Row>
                    <p>Instructed class of Amazon employees in Full Stack on HTML, CSS and JavaScript</p>
                </Row>
            </Container>

            <Container>
                <Row>
                    <h4>Software Programmer · Independant Contact Work (October 2015 - January 2019)</h4>
                </Row>
                <Row>
                    <p>The following is a list of the type of work I have performed over the past few 
                        years for various people and companies.
                        <ul>
                            <li>Database entry, accounting work for various companies and persons.</li>
                            <li>Set up and create code for www.TheFileStop.com (Dec 2016 - Dec 2017)</li>
                                <ul><li>PHP, MySQL, LAMP Server, jQuery / jQuery-UI, Bootstrap v4, Authentication System</li></ul>
                            <li>Set up and create code for www.LateNightSoftware.net</li>
                                <ul><li>PHP, MySQL, LAMP Server, jQuery, Bootstrap 3, Authentication, Custom chat rooms, PHPBB3 Install</li></ul>
                            <li>Set up full LAMP server in a VMWare Virtual machine</li>
                            <li>Network Administration</li>
                            <li>Operating System Installations and general computer repair</li>
                            <li>Freelance web developer</li>
                            <li>Experience creating graphical user interfaces</li>
                        </ul>
                    </p>
                </Row>
            </Container>

            <Container>
                <Row>
                    <h4>JobTitle · JobCompany (Date Employed)</h4>
                </Row>
                <Row>
                    <p>Summary</p>
                </Row>
            </Container>

        </ThemeProvider>
    )
};
  
// export default Resume;