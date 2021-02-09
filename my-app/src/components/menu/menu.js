import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import {
    Container
} from 'reactstrap';
  
export function Menu() {
    return (
        <div className="Menu sticky-top">
            <nav class="dropdownmenu">
                <Container>
                <ul>
                    <li><Link to="/"> HOME </Link></li>
                    <li><Link to="/gioithieu">GIỚI THIỆU</Link>
                    <ul id="submenu">
                        <li><a href="#">Giới thiệu chung</a></li>
                        <li><a href="#">Thông tin nhà máy</a></li>
                        <li><a href="#">Chứng nhận và Bảo hộ</a></li>
                    </ul>
                    </li>
                    <li><Link to="/sanpham">SẢN PHẨM</Link></li>
                    <li><Link to="/tintuc">TIN TỨC</Link></li>
                    <li><Link to="/lienhe">LIÊN HỆ</Link></li>
                    <li id="cart"><Link to="/giohang">GIỎ HÀNG ▾</Link></li>
                </ul>
                </Container>
            </nav>
        </div> 
    );
}