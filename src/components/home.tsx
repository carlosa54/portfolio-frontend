import * as React from 'react';
import Slider from 'react-slick';
const profilePicture = require('../img/picture.jpg');
const react = require('../img/react.png');
const pdj = require('../img/python-django-logo.jpg');
const rest = require('../img/dj-rest-framework.png');
const psql = require('../img/postgresql.jpg');
import styled from 'styled-components';
import { Center, Flex, FlexColumn } from './common';

const Subtitle = styled.p`
	font-family: 'Bookman';
	font-size: 1vw;
	line-height: 1.8em;
	text-transform: uppercase;
	letter-spacing: 3px;
	font-weight: 300;
	font-style: normal;
	color: #cfcfcf;
	@media screen and (max-width:990px) {
		display: none;
	  }
`;

const Name = styled.p`
	font-size: 3.5vw;
	padding-top 10px;
`;

const Image = styled.img`
	max-width: 100%;
`;

const SliderItem = styled.div`
	padding: 10px 30px;
	flex-flow: row nowrap;
	align-items: center;
`;

const ProfilePicture = styled.img`
	max-height: 200px;
	border-radius: 25px;
`;

const TopSection = Flex.extend`
	align-items: center;
	justify-content: space-around;
	padding: 3% 0;
	background-color: #40649a;
	color: white;
	@media screen and (max-width:990px) {
		flex-direction: column;
	  }
`;

const TextSection = FlexColumn.extend`
	justify-content: center;
`;

export default class Home extends React.PureComponent<any, any> {
    render() {
        let settings = {
            autoplay: true,
            centerMode: true,
            dots: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{ breakpoint: 991, settings: { slidesToShow: 2, autoplay: true, speed: 1000, slidesToScroll: 1, swipeToSlide: true } }, { breakpoint: 1024, settings: { slidesToScroll: 1, slidesToShow: 4, autoplay: true, speed: 1000, swipeToSlide: true } }, { breakpoint: 480, settings: { speed: 1000, slidesToScroll: 1, slidesToShow: 1, autoplay: true, swipeToSlide: true } }]
        };
        return (
            <FlexColumn>
                <TopSection>
                    <div />
                    <ProfilePicture src={profilePicture} />
                    <TextSection>
                        <Name>Carlos A. Ramírez</Name>
                        <Subtitle>
                            Software Engineer. Freelancer.
                        </Subtitle>
                    </TextSection>
                    <div />
                    <div />
                </TopSection>
                <div>
                    <br />
                    <Center>
                        <h3>Technology Stack used for portfolio</h3>
                    </Center>
                    <br />
                    <Slider {...settings}>
                        <SliderItem><Image src={react} /></SliderItem>
                        <SliderItem><Image src={pdj} /></SliderItem>
                        <SliderItem><Image src={rest} /></SliderItem>
                        <SliderItem><Image src={psql} /></SliderItem>
                    </Slider>
                </div>
            </FlexColumn>
        );
    }
}
