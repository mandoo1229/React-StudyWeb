import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../base/Header';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage1 from '../style/image/study1.png';
import ExampleCarouselImage2 from '../style/image/study2.png'
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';






const Main = () => {
    // const navigate = useNavigate();
    return (
        <div>
            <Header />
            <div style={{ width:'100%',textAlign: 'center'}}>
                <Carousel style={{ width: '90%', maxHeight: '900px',display: 'inline-block'}}>
                    <Carousel.Item  style={{right:'0%'}}>
                    <Image src={ExampleCarouselImage1} style={{ width:'100%', height:'600px', objectFit: 'cover' }} />
                        <Carousel.Caption style={{ marginBottom:'12%'}}>
                        <h3>지금 우리 스터디는</h3>
                        <p style={{marginBottom:'2%'}}>스터디원들과 오늘 하루를 공유하세요!</p>
                        <a to='www.naver.com' style={{ padding:'20px', background:'#6B46C1', borderRadius:'10px'}}>우리 스터디 보러가기</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={ExampleCarouselImage2} style={{  width:'100%', height:'600px', objectFit: 'cover' }} />
                        <Carousel.Caption style={{ marginBottom:'12%'}}>
                        <h2>새로운 스터디를</h2>
                        <p style={{marginBottom:'2%'}}>동료들을 모아서, 함께 성장하세요!</p>
                        <a style={{ padding:'20px', background:'#6B46C1', borderRadius:'10px'}} > 스터디 만들기</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Main;