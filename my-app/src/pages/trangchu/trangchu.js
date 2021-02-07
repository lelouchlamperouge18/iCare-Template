import React from 'react';
import './trangchu.css'
import { Container, Row, Col, Button } from 'reactstrap'

export function Homepage() {
    return (
        <div className="Homepage">
            <Container>
                <Row>
                    <Col xs="6" sm="6" md="3" className="homepage__item--type1">
                        <div className="homepage__item ">
                            <img className="homepage__item--image" src="https://cdn0.iconfinder.com/data/icons/healthcare/512/pills.png" alt=""></img>
                            <p className="homepage__item--title">BỆNH NGOÀI DA</p>
                            <p className="homepage__item--description"> 
                                Lelouch vi Britannia (ルルーシュ・ヴィ・ブリタニア, Rurūshu vui Buritania) is the main protagonist of Code Geass: Lelouch of the Rebellion and Code Geass: Lelouch of the Rebellion R2
                            </p>
                        </div>
                    </Col>
                    <Col xs="6" sm="6" md="3" className="homepage__item--type2">
                        <div className="homepage__item">
                            <img className="homepage__item--image" src="https://cdn0.iconfinder.com/data/icons/healthcare/512/pills.png" alt=""></img>
                            <p className="homepage__item--title">XOA BÓP - GIẢM ĐAU</p>
                            <p className="homepage__item--description"> 
                                After he was exiled, he used the alias, Lelouch Lamperouge (ルルーシュ・ランペルージ, Rurūshu Ranperūji). He was the Eleventh Prince of the Holy Britannian Empire and the son of the 98th Emperor of Britannia, Charles zi Britannia
                            </p>
                        </div>
                    </Col>
                    <Col xs="6" sm="6" md="3" className="homepage__item--type1">
                        <div className="homepage__item">
                            <img className="homepage__item--image" src="https://cdn0.iconfinder.com/data/icons/healthcare/512/pills.png" alt=""></img>
                            <p className="homepage__item--title">ĐIỀU TRỊ MẮT-MŨI-TAI</p>
                            <p className="homepage__item--description"> 
                                He was also the leader and founder of The Black Knights and the real identity of Zero. He is voiced by Jun Fukuyama, while his child self is voiced by Sayaka Ohara.
                            </p>
                        </div>
                    </Col>
                    <Col xs="6" sm="6" md="3" className="homepage__item--type2">
                        <div className="homepage__item">
                            <img className="homepage__item--image" src="https://cdn0.iconfinder.com/data/icons/healthcare/512/pills.png" alt=""></img>
                            <p className="homepage__item--title">THUỐC BỔ - VITAMIN</p>
                            <p className="homepage__item--description"> 
                                His English dub voice is provided by Johnny Yong Bosch with Michelle Ruff doing Lelouch's child voice.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs="12" sm="12" md="12">
                        <div className="homepage__bigtitle">
                            GIỚI THIỆU CÔNG TY
                        </div>
                    </Col>
                </Row>

                <Row className="homepage__companyintroduce">
                    <Col xs="4" sm="4" md="4">
                        <div className="homepage__introduce">
                            <img className="homepage__introduce--image img-fluid" src="https://truyenvn.com/tin/wp-content/uploads/2019/10/date-a-live-758x472.jpg" alt=""></img>
                            <p className="homepage__introduce--title">HÌNH THÀNH & PHÁT TRIỂN </p>
                            <p className="homepage__introduce--description">
                                Lelouch vi Britannia (ルルーシュ・ヴィ・ブリタニア, Rurūshu vui Buritania) is the main protagonist of Code Geass: Lelouch of the Rebellion and Code Geass: Lelouch of the Rebellion R2
                            </p>
                            <Button color="danger" className="homepage__introduce--button">XEM CHI TIẾT</Button>{' '}
                        </div>
                    </Col>
                    <Col xs="4" sm="4" md="4">
                        <div className="homepage__introduce">
                            <img className="homepage__introduce--image img-fluid" src="https://www.hallofseries.com/wp-content/uploads/2019/02/Your-Name-758x472.jpg" alt=""></img>
                            <p className="homepage__introduce--title">TẦM NHÌN & NHIỆM VỤ </p>
                            <p className="homepage__introduce--description">
                                Lelouch vi Britannia (ルルーシュ・ヴィ・ブリタニア, Rurūshu vui Buritania) is the main protagonist of Code Geass: Lelouch of the Rebellion and Code Geass: Lelouch of the Rebellion R2
                            </p>
                            <Button color="danger" className="homepage__introduce--button">XEM CHI TIẾT</Button>{' '}
                        </div>
                    </Col>
                    <Col xs="4" sm="4" md="4">
                        <div className="homepage__introduce">
                            <img className="homepage__introduce--image img-fluid" src="https://truyenvn.com/tin/wp-content/uploads/2020/05/Masamune-kuns-revenge-758x472.jpg" alt=""></img>
                            <p className="homepage__introduce--title">THÀNH TÍCH </p>
                            <p className="homepage__introduce--description">
                                Lelouch vi Britannia (ルルーシュ・ヴィ・ブリタニア, Rurūshu vui Buritania) is the main protagonist of Code Geass: Lelouch of the Rebellion and Code Geass: Lelouch of the Rebellion R2
                            </p>
                            <Button color="danger" className="homepage__introduce--button">XEM CHI TIẾT</Button>{' '}
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="homepage__newproducts">
                <Row>
                    <Col xs="12" sm="12" md="12">
                        <div className="homepage__bigtitle2">
                            SẢN PHẨM MỚI NHẤT
                        </div>
                    </Col>
                </Row>
                <Container>
                    <Row>
                        <Col xs="6" sm="3" md="3">
                            <div className="homepage__newproduct">
                                <p className="homepage__newproduct--name">EDERMFA</p>
                                <img className="homepage__newproduct--image img-fluid" src="https://ae01.alicdn.com/kf/HTB1FWCnsb5YBuNjSspoq6zeNFXat/Code-Geass-Lelouch-vi-Britannia-Cosplay-T-c-Gi-Mi-n-Ph-V-n-Chuy-n.jpg_960x960.jpg" alt=""></img>                          
                                <p className="homepage__newproduct--price">Giá từ 10.000 - 20.000 VNĐ</p>
                                <Button color="danger" className="homepage__newproduct--button">THÊM VÀO GIỎ</Button>{' '}
                            </div>
                        </Col>
                        <Col xs="6" sm="3" md="3">
                            <div className="homepage__newproduct">
                                <p className="homepage__newproduct--name">EDERMFA</p>
                                <img className="homepage__newproduct--image img-fluid" src="https://i.pinimg.com/originals/70/aa/f7/70aaf74f16215e0b2c66efd6a8420945.jpg" alt=""></img>                          
                                <p className="homepage__newproduct--price">Giá từ 50.000 - 60.000 VNĐ</p>
                                <Button color="danger" className="homepage__newproduct--button">THÊM VÀO GIỎ</Button>{' '}
                            </div>
                        </Col>
                        <Col xs="6" sm="3" md="3">
                            <div className="homepage__newproduct">
                                <p className="homepage__newproduct--name">EDERMFA</p>
                                <img className="homepage__newproduct--image img-fluid" src="https://img.wattpad.com/28884c26b0509fd5ac9a34433baadc539e5f4b42/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4c537776366970626743696273773d3d2d3535313939343139342e313531666365323238323763396265313732303637303930373637372e6a7067" alt=""></img>                          
                                <p className="homepage__newproduct--price">Giá từ 5.000.000 - 7.000.000 VNĐ</p>
                                <Button color="danger" className="homepage__newproduct--button">THÊM VÀO GIỎ</Button>{' '}
                            </div>
                        </Col>
                        <Col xs="6" sm="3" md="3">
                            <div className="homepage__newproduct">
                                <p className="homepage__newproduct--name">EDERMFA</p>
                                <img className="homepage__newproduct--image img-fluid" src="https://img.wattpad.com/05ea946840140ebdddd0c04dd2c17a18380d7622/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5f6e647635506e536434765a69413d3d2d3738393631373330392e313563616132353434313631343333613337363432383638323333372e6a7067" alt=""></img>                          
                                <p className="homepage__newproduct--price">Giá từ 5.000.000 - 9.000.000 VNĐ</p>
                                <Button color="danger" className="homepage__newproduct--button">THÊM VÀO GIỎ</Button>{' '}
                            </div>
                        </Col>
                    </Row>
                </Container>              
            </Container>
            <Container fluid className="homepage__newsfeedback">
                <Container>
                    <Row>
                        <Col xs="12" sm="12" md="12">
                            <div className="homepage__bigtitle3">
                                TIN TỨC MỚI NHẤT
                            </div>
                        </Col>

                        <Col xs="12" sm="12" md="3">
                            <img className="homepage__newsfeedback--image1 img-fluid" src="https://cdn.tgdd.vn/2020/07/content/thumb-800x450-34.jpg" alt=""></img>                                         
                        </Col>
                        <Col xs="12" sm="12" md="3">
                            <Row>
                                <Col xs="2" sm="2" md="2">
                                    <Button color="danger" className="homepage__newsfeedback--day">12</Button>
                                    <Button color="secondary" className="homepage__newsfeedback--month">09</Button>
                                </Col>
                                <Col xs="10" sm="10" md="10" className="homepage__newsfeedback--des">
                                    <div className="homepage__newsfeedback--title">Mùa thu, ăn gì để giải độc?</div>
                                    <div className="homepage__newsfeedback--desciption">
                                    His English dub voice is provided by Johnny Yong Bosch with Michelle Ruff doing Lelouch's child voice.
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col xs="12" sm="12" md="3">
                            <img className="homepage__newsfeedback--image img-fluid" src="https://i.imgur.com/gj9ZdoT.jpg" alt=""></img>                                         
                        </Col>
                        <Col xs="12" sm="12" md="3">
                            <Row>
                                <Col xs="2" sm="2" md="2">
                                    <Button color="danger" className="homepage__newsfeedback--day">12</Button>
                                    <Button color="secondary" className="homepage__newsfeedback--month">09</Button>
                                </Col>
                                <Col xs="10" sm="10" md="10" className="homepage__newsfeedback--des">
                                    <div className="homepage__newsfeedback--title">Mùa thu, ăn gì để giải độc?</div>
                                    <div className="homepage__newsfeedback--desciption">
                                    His English dub voice is provided by Johnny Yong Bosch with Michelle Ruff doing Lelouch's child voice.
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col xs="12" sm="12" md="12">
                            <div className="homepage__bigtitle3">
                                Ý KIẾN KHÁCH HÀNG
                            </div>
                        </Col>

                        <Col xs="12" sm="1" md="1"></Col>
                        <Col xs="12" sm="10" md="10">
                            <Row>
                                <Col xs="4" sm="4" md="4">
                                    <img className="homepage__newsfeedback--image2 img-fluid" src="https://i.pinimg.com/736x/e1/f1/f8/e1f1f8fa28e49f15b4d0400e7d8975d1.jpg" alt=""></img>
                                    <div className="homepage__newsfeedback--nameguest">MS. CC</div>
                                    <div className="homepage__newsfeedback--feedbackguest">
                                        Lelouch vi Britannia (ルルーシュ・ヴィ・ブリタニア, Rurūshu vui Buritania) is the main protagonist of Code Geass: Lelouch of the Rebellion and Code Geass: Lelouch of the Rebellion R2
                                    </div>
                                </Col>
                                <Col xs="4" sm="4" md="4">
                                    <img className="homepage__newsfeedback--image2 img-fluid" src="https://gamek.mediacdn.vn/133514250583805952/2020/4/29/photo-1-15881480277132025567834.jpg" alt=""></img>
                                    <div className="homepage__newsfeedback--nameguest">MS. TERRY</div>
                                    <div className="homepage__newsfeedback--feedbackguest">
                                        Lelouch vi Britannia (ルルーシュ・ヴィ・ブリタニア, Rurūshu vui Buritania) is the main protagonist of Code Geass: Lelouch of the Rebellion and Code Geass: Lelouch of the Rebellion R2
                                    </div>
                                </Col>
                                <Col xs="4" sm="4" md="4">
                                    <img className="homepage__newsfeedback--image2 img-fluid" src="https://i.pinimg.com/736x/58/44/71/5844710e5f76caa3928754afcd30de2f.jpg" alt=""></img>
                                    <div className="homepage__newsfeedback--nameguest">MS. TONY</div>
                                    <div className="homepage__newsfeedback--feedbackguest">
                                        Lelouch vi Britannia (ルルーシュ・ヴィ・ブリタニア, Rurūshu vui Buritania) is the main protagonist of Code Geass: Lelouch of the Rebellion and Code Geass: Lelouch of the Rebellion R2
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs="12" sm="1" md="1"></Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}