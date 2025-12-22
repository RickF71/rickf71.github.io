import React from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import DisGatewayCard from './DisGatewayCard';  

export const Contact = () => {
    return (
        <>
            <Container>
                <h3>Richard Fleischman</h3>
                <div>Phone: 414-275-0161</div>
                <div>Phone: 415-633-6359</div>
                <div>Email: rickf71@gmail.com</div>
                <div>LinkedIn: <a href="https://www.linkedin.com/in/rickfleischman/">https://www.linkedin.com/in/rickfleischman/</a></div>
                <div>Github: <a href='https://rickf71.github.io/'>https://rickf71.github.io/</a></div>
                <div>Threads: <a href='https://www.threads.net/@fleischmanrick'>https://www.threads.net/@fleischmanrick</a></div>
            </Container>

            <Container>
                <Row className="no-gutters">
                    <Col sm={12}>
                        <DisGatewayCard />
                    </Col>
                </Row>
            </Container>
        </>
    )
};
  
// export default Resume;