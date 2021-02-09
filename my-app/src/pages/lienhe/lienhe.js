import React from 'react';
import './lienhe.css'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

export function Lienhe() {
    return (
        <div className="Lienhe">
            <Container>
                <Row>
                    <Col xs="12" sm="12" md="12">
                        <div className="lienhe__title">
                            LIÊN HỆ
                        </div>
                    </Col>
                    <Col xs="12" sm="5" md="5">
                        <img src="https://images.photowall.com/products/43942/world-map-detailed.jpg?h=699&q=85" className="img-fluid" alt=""></img>
                        <div className="lienhe__info">
                            <b>Địa chỉ: </b> 127 Lò Lu, P. Trường Thạnh, Q.9, TPHCM
                            <br></br>
                            <b>Điện thoại: </b> 0906506734
                            <br></br>
                            <b>Email: </b> thu@sagonhano.com.vn
                            <br></br>
                        </div>
                        <div className="lienhe__title1">
                            Nhân viên kinh doanh
                        </div>
                        <div className="lienhe__employee--box">
                            <Row>
                                <Col xs="4" sm="4" md="2">
                                    <img className="lienhe__employee--image img-fluid" alt="" src="https://images6.fanpop.com/image/photos/41900000/Itachi-Uchiha-itachi-uchiha-41946313-690-690.jpg"></img>
                                </Col>
                                <Col xs="8" sm="8" md="4">
                                    <div className="lienhe__employee--name">UCHIHA ITACHI</div>
                                    <div className="lienhe__employee--job">JUNIN</div>
                                </Col>
                                <Col xs="0" sm="0" md="3">                         
                                </Col>
                                <Col xs="12" sm="12" md="3">
                                    <div className="lienhe__employee--chat">CHAT</div>
                                </Col>
                            </Row>
                        </div>
                        <div className="lienhe__employee--box">
                            <Row>
                                <Col xs="4" sm="4" md="2">
                                    <img className="lienhe__employee--image img-fluid" alt="" src="https://3.bp.blogspot.com/-iGLfchxdrAE/WX3OtgCrCkI/AAAAAAAACUQ/UYzmnAEM_rsXI5QGk2JefSlc2vTLhBvYACLcBGAs/s1600/Shisui.png"></img>
                                </Col>
                                <Col xs="8" sm="8" md="4">
                                    <div className="lienhe__employee--name">UCHIHA SHISUI</div>
                                    <div className="lienhe__employee--job">JUNIN</div>
                                </Col>
                                <Col xs="0" sm="0" md="3">                         
                                </Col>
                                <Col xs="12" sm="12" md="3">
                                    <div className="lienhe__employee--chat">CHAT</div> 
                                </Col>
                            </Row>
                        </div>     
                    </Col>
                    <Col xs="12" sm="7" md="7">
                        <div className="lienhe__title1">
                            Thông tin liên hệ
                        </div>
                        <Form>
                            <FormGroup row>
                                <Label sm={2} className="lienhe__title2">Họ tên: </Label>
                                <Col sm={10}>
                                <Input required type="text" name="name"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={2} className="lienhe__title2">Email: </Label>
                                <Col sm={10}>
                                <Input required type="email" name="email"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={2} className="lienhe__title2">Số điện thoại: </Label>
                                <Col sm={10}>
                                <Input required type="number" name="telephone"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={2} className="lienhe__title2">Tiêu đề: </Label>
                                <Col sm={10}>
                                <Input required type="text" name="name"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={2} className="lienhe__title2">Nội dung: </Label>
                                <Col sm={10}>
                                <Input required type="textarea" name="noidung" rows="10"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={2}></Label>
                                <Col sm={10}>
                                <Button color="danger" className="lienhe__submit">GỬI</Button>{' '}
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}