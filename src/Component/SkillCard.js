import React from 'react';
import { Col, Row } from 'react-bootstrap';

const SkillCard = ({skill}) => {
  console.log(skill);
  return (
    <Row className="d-flex align-items-center">
      <Col sm={2}  style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img src={skill.logoSrc} alt={skill.title} style={{ width: '100%', height: 'auto' }} />
      </Col>
      <Col sm={10}>
        <div style={{ fontSize: '2rem' }}>{skill.title}</div>
        <div style={{ fontSize: '1rem', lineHeight: '1.25rem', paddingBottom: '1rem' }}>
          {skill.description}
          {skill.extraInfo && <div>{skill.extraInfo}</div>}
        </div>
      </Col>
    </Row>
  );
};

export default SkillCard;