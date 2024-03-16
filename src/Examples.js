import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

export const Examples = () => {
    return (
        <>

            <section class="parallax-layer layer1">
                <h1>Welcome!</h1>
                <p>This is the foreground layer with slow scroll.</p>
            </section>
            <section class="parallax-layer layer2">
                <img src="./images/blender-logo-1.png" alt="Background Image 2" />
            </section>
            <section class="parallax-layer layer3">
                <p>This is the background layer with fast scroll.</p>
            </section>

        </>
    )
};
  
// export default Resume;