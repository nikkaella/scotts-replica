import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import hero from '../images/hero.svg';
import '../styles/Front.css';

function Front() {
    return (
        <div>
            <Row className='hero-img'>
                <Col className='m-5 hero-text'>
                    <h1 className='title'>Never overpay for flights again.</h1>
                    <p>Amazing deals to the best destinations.<br />
                    You save up to 90%.</p>
                    <Button className='px-5 py-3'>Get free flight alerts &rarr;</Button>
                </Col>
                <Col sm={7}><Image src={hero} fluid/></Col>
            </Row>
        </div>

    )
}

export default Front
