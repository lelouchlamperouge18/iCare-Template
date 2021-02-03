import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './banner.css';
import {
    Container,
    Jumbotron
  } from 'reactstrap';
  
export function Banner() {
    return (
        <div className="Banner">
            <Container fluid>
                <h1 className="display-3 banner__title">WE OFFER</h1>
                <p className="lead">Provicing appropriate health care for adults, seniors and children</p>
             </Container>
        </div> 
    );
}