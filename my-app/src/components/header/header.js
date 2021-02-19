import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import {
    Container, Row, Col
} from 'reactstrap';
import logo from '../../assets/photos/logo.PNG'

export function Header() {
    return (
        <div className="Header">
            <Container>
                <Row>
                    <Col xs="1" sm="1" md="1">
                        <img className="header__logo img-fluid" src={logo} />
                    </Col>
                    <Col xs="11" sm="11" md="8">
                        <input className="header__input" type="text" placeholder="Nhập sản phẩm bạn cần tìm" />
                        <button className="header__button">
                            <i className="material-icons header__icon1">search</i>
                        </button>
                    </Col>
                    <Col xs="12" sm="12" md="3" className="header__right">
                        <div className="header__login--info">
                            <a className="header__login header__login--blur"> EN </a> |
                            <a href="#" className="header__login"> Tuyển dụng </a> |
                            <a href="#" className="header__login"> Đăng ký </a> |
                            <a href="#" className="header__login"> Đăng nhập </a>
                        </div> 
                        <i className="material-icons header__icon2">phone</i>   
                        <div className="header__phone">
                            0906-506-734
                        </div>
                    </Col> 
                </Row>
            </Container>
        </div> 
    );
}
