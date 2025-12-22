import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export const Examples = () => {
  return (
    <div
      style={{
        backgroundColor: "#F4EADF",
        minHeight: "100vh",
        paddingTop: "3rem",
        paddingBottom: "3rem"
      }}
    >
      <Container>
        <Row className="mb-4">
          <Col>
            <h1
              style={{
                fontSize: "2.2rem",
                fontWeight: 600,
                letterSpacing: "-0.04em",
                color: "#2b1d12"
              }}
            >
              Examples & Experiments
            </h1>
            <p
              style={{
                maxWidth: "720px",
                color: "#4a3728",
                fontSize: "1.05rem"
              }}
            >
              A selection of exploratory work, interface ideas, and technical
              experiments. These are not polished products — they represent
              curiosity, iteration, and learning.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <ExampleCard
            title="Interface Experiments"
            description="Early explorations in UI layout, interaction, and visual hierarchy. Includes abandoned ideas and lessons learned."
          />

          <ExampleCard
            title="3D / Visualization"
            description="Experiments using Blender and 3D thinking to explore spatial representation and abstraction."
          />

          <ExampleCard
            title="System Design Concepts"
            description="Thought experiments and prototypes focused on systems, authority boundaries, and structured interaction."
          />
        </Row>
      </Container>
    </div>
  );
};

const ExampleCard = ({ title, description }) => (
  <Col md={4}>
    <Card
      style={{
        height: "100%",
        backgroundColor: "#ECD7C4",
        border: "1px solid rgba(0,0,0,0.15)",
        borderRadius: "12px"
      }}
    >
      <Card.Body>
        <Card.Title
          style={{
            fontWeight: 600,
            color: "#2b1d12"
          }}
        >
          {title}
        </Card.Title>
        <Card.Text style={{ color: "#4a3728" }}>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
);
